import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { StatusCode } from './statuscode';
import { sign} from 'hono/jwt';
import { signinSchema, signupSchema } from './zod';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
      userId: string;
  };
}>();


app.post('/signup', async (c) => {
  const body = await c.req.json();
  
  const { success } = signupSchema.safeParse(body);

  if(!success) {
    c.status(StatusCode.BadRequest);
    return c.json({
      msg: "Incorrect input"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
 
  try{
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password
      },
    })

    const token = await sign({id: user.id}, c.env.JWT_SECRET)

    return c.json({
      msg: "successfull",
      token: token
    },{status: StatusCode.OK});

  } catch(e) {
    c.status(StatusCode.InternalServerError);
      return c.json({
      msg: "Invalid"
      });
  }
})


app.post('/signin', async (c) => {
  const body = await c.req.json();

  const { success } = signinSchema.safeParse(body);

  if(!success) {
    c.status(StatusCode.InternalServerError);
    return c.json({
      msg: "Incorrect input"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  try{
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })

    if(!user) {
      c.status(StatusCode.Unauthorized);
      return c.json({
        msg: "this email is already exist"
      });
    }

    const token = await sign({id: user.id}, c.env.JWT_SECRET);

    return c.json({
      msg: "succesfully logged in",
      token: token
    },{status: StatusCode.OK});

  } catch(e) {
    c.status(StatusCode.InternalServerError);
    return c.json({
      msg: "Invalid details"
    })
  }
})

export default app
