import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { z } from 'zod';
import { StatusCode } from "../statuscode";

const productRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    }
}>();


export const productSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    price: z.number().positive(),
    imageUrl: z.string().url().optional(),
    category: z.string(),
});

type ProductInput = z.infer<typeof productSchema>;


const createPrismaClient = (databaseUrl: string) => {
    return new PrismaClient({
        datasourceUrl: databaseUrl,
    }).$extends(withAccelerate());
};


productRouter.post("/", async (c) => {
    try {
        const body = await c.req.json();
        const validatedData = productSchema.parse(body);

        const prisma = createPrismaClient(c.env.DATABASE_URL);
        
        const newProduct = await prisma.product.create({
            data: validatedData,
        });

        return c.json({ product: newProduct, msg: "Product created successfully" }, { status: StatusCode.Created });
    } catch (e) {
        if (e instanceof z.ZodError) {
            c.status(StatusCode.BadRequest);
            return c.json({ msg: "Invalid input", errors: e.errors });
        }
        console.error(e);
        c.status(StatusCode.InternalServerError);
        return c.json({ msg: "Failed to create product" });
    }
});


productRouter.get("/", async (c) => {
    try {
        const prisma = createPrismaClient(c.env.DATABASE_URL);
        const products = await prisma.product.findMany();
        return c.json({ products }, { status: StatusCode.OK });
    } catch (e) {
        console.error(e);
        c.status(StatusCode.InternalServerError);
        return c.json({ msg: "Failed to retrieve products" });
    }
});


productRouter.get("/:id", async (c) => {
    try {
        const id = c.req.param('id');
        const prisma = createPrismaClient(c.env.DATABASE_URL);
        const product = await prisma.product.findUnique({
            where: { id },
        });

        if (!product) {
            c.status(StatusCode.NotFound);
            return c.json({ msg: "Product not found" });
        }

        return c.json({ product }, { status: StatusCode.OK });
    } catch (e) {
        console.error(e);
        c.status(StatusCode.InternalServerError);
        return c.json({ msg: "Failed to retrieve product" });
    }
});


productRouter.put("/:id", async (c) => {
    try {
        const id = c.req.param('id');
        const body = await c.req.json();
        const validatedData = productSchema.parse(body);

        const prisma = createPrismaClient(c.env.DATABASE_URL);
        const updatedProduct = await prisma.product.update({
            where: { id },
            data: validatedData,
        });

        return c.json({ product: updatedProduct, msg: "Product updated successfully" }, { status: StatusCode.OK });
    } catch (e) {
        if (e instanceof z.ZodError) {
            c.status(StatusCode.BadRequest);
            return c.json({ msg: "Invalid input", errors: e.errors });
        }
        console.error(e);
        c.status(StatusCode.InternalServerError);
        return c.json({ msg: "Failed to update product" });
    }
});


productRouter.delete("/:id", async (c) => {
    try {
        const id = c.req.param('id');
        const prisma = createPrismaClient(c.env.DATABASE_URL);
        await prisma.product.delete({
            where: { id },
        });

        return c.json({ msg: "Product deleted successfully" }, { status: StatusCode.OK });
    } catch (e) {
        console.error(e);
        c.status(StatusCode.InternalServerError);
        return c.json({ msg: "Failed to delete product" });
    }
});

