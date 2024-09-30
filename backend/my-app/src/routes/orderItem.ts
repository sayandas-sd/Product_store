import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { authMiddleWare } from "../middlewares/middleware";
import { createOrderSchema } from "../zod";
import { StatusCode } from "../statuscode";


export const orderRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    };
}>()


orderRouter.use('/*', authMiddleWare);

//new order

orderRouter.post("/", async (c) => {
    try{

        const { addressId, items } = await c.req.json() ;

        const userId = c.get('userId');

        const { success } = createOrderSchema.safeParse({ addressId, items });

        if(!success) {
            c.status(StatusCode.BadRequest);
            return c.json({
                msg: "Incorrect input"
            })
        }

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())

        const total = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

        const newOrder = await prisma.order.create({
            data: {
                userId,
                addressId,
                total,
                status: 'pending',
                items: {
                    create: items.map((item: any)=>({
                        price: item.price,
                        quantity: item.quantity,
                        productId: item.productId,
                    })),
                }
            },
            include: {
                items: true
            }
        })
       
        return c.json({
            newOrder,
            msg: "successfull order"
        },{status: StatusCode.OK});

       

    } catch(e) {
        c.status(StatusCode.InternalServerError);
        return c.json({
            msg: "Invalid"
        });
    }
})

//order details 

orderRouter.get("/", async (c)=>{
    try{
        const userId = c.get('userId');

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())
          
        const orders = await prisma.order.findMany({
            where: {
                userId
            }
        });

        return c.json({
            orders
        },{status: StatusCode.OK});
          
    } catch(e) {
        c.status(StatusCode.InternalServerError);
        return c.json({
            msg: "Failed to retrieve orders"
        });
    }
    
})

//specific order

orderRouter.get("/:id", async (c)=>{
    try{
        const orderId = c.req.param('id');
        const userId = c.get('userId');

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())

        const order = await prisma.order.findUnique({
            where: {
                id: orderId
            }
        })

        if(!order || order.userId !== userId) {
            c.status(StatusCode.Unauthorized);
            return c.json({
                msg: "Order not found"
            })
        }

        return c.json({
            msg: "successfully found this order"
        },{status: StatusCode.OK});

    } catch(e) {
        c.status(StatusCode.InternalServerError);
        return c.json({
            msg: "Failed to retrieve order"
        })
    }
}) 


