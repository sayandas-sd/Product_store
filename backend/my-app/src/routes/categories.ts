import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { authMiddleWare } from "../middlewares/middleware";
import { createOrderSchema } from "../zod";
import { StatusCode } from "../statuscode";


export const categoryRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    }
}>();

categoryRouter.get("/", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())      

    try{
        const categories = await prisma.category.findMany({});

        return c.json({
            msg: "Categories fetched successfully"
        }, { status: StatusCode.OK })

    } catch(e) {
        return c.json({
            msg: "Failed to fetch categories",
        }, StatusCode.InternalServerError);
    }
    
})