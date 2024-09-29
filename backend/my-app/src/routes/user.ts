import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { StatusCode } from '../statuscode';
import { sign} from 'hono/jwt';
import { profileSchema, signinSchema, signupSchema } from '../zod';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
      }
}>()


userRouter.post('/signup', async (c) => {
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
      const existingUser = await prisma.user.findUnique({
        where: { email: body.email },
      });
  
      if (existingUser) {
        c.status(StatusCode.Unauthorized);
        return c.json({ msg: "User with this email already exists" });
      }
      
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: body.password
        },
      })

      console.log('User created:', user);
  
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
  
  
  userRouter.post('/signin', async (c) => {
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

      //jwt token
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
  

userRouter.post("/profile", async (c) => {
  try {
    const body = await c.req.json();

    const result = profileSchema.safeParse(body);

    if (!result.success) {
      c.status(StatusCode.BadRequest);
      return c.json({
        msg: "Incorrect input",
        errors: result.error.errors
      });
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const userProfile = await prisma.user.update({
      where: { 
        email: body.email 
      },
      data: {
        address: {
          create: body.address,
        },
      }
    });

    return c.json({
      profile: userProfile,
      msg: "Profile updated successfully"
    }, { status: StatusCode.OK });

  } catch (e) {
    console.error(e);
    c.status(StatusCode.InternalServerError);
    return c.json({
      msg: "Could not update profile"
    });
  }
});