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

