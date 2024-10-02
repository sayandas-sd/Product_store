import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { z } from 'zod';
import { StatusCode } from "../statuscode";
import { productSchema } from "../zod";

export const productRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    }
}>();



productRouter.post("/", async (c) => {
    try {
        const body = await c.req.json();

        const { success } = productSchema.safeParse(body);

        if(!success) {
            c.status(StatusCode.BadRequest);
            return c.json({
                 msg: "Incorrect input"
            })

        }

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())
          
        const newProduct = await prisma.product.create({
            data: {
                name: body.name,
                description:  body.description,
                price: body.price,
                inventory: body.inventory,
                image: body.image,
                category: body.category
            },
        });

        return c.json({ 
            product: newProduct,
            msg: "Product created successfully" 
        }, { status: StatusCode.OK });

    } catch (e) {
        c.status(StatusCode.InternalServerError);
        return c.json({ 
            msg: "Failed to create product" 
        });
    }
});


productRouter.get("/", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())
          
        const products = await prisma.product.findMany();

        return c.json({ 
            products 
        }, { status: StatusCode.OK });

    } catch (e) { 

        c.status(StatusCode.InternalServerError);

        return c.json({ 
            msg: "Failed to retrieve products" 
        });
    }
});


productRouter.get("/:id", async (c) => {
    try {
        const id = c.req.param('id');
        
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())

        const product = await prisma.product.findUnique({
            where: { 
                id 
            },
        });

        if (!product) {
            c.status(StatusCode.NotFound);
            return c.json({ 
                msg: "Product not found" 
            });
        }

        return c.json({ 
            product 
        }, { status: StatusCode.OK });

    } catch (e) {
       
        c.status(StatusCode.InternalServerError);

        return c.json({
             msg: "Failed to retrieve product" 
        });
    }
});


productRouter.put("/:id", async (c) => {
    try {
        const id = c.req.param('id');
        const body = await c.req.json();
        
        const { success } = productSchema.safeParse(body);

        if(!success) {
            c.status(StatusCode.BadRequest);
            return c.json({
                 msg: "Incorrect input"
            })

        }

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())


        const updatedProduct = await prisma.product.update({
            where: { id },
            data: {
                name: body.name,
                description:  body.description,
                price: body.price,
                inventory: body.inventory,
                image: body.image,
                category: body.category
            },
        });

        return c.json({ 
            product: updatedProduct, 
            msg: "Product updated successfully" 
        }, { status: StatusCode.OK });

    } catch (e) {
        c.status(StatusCode.InternalServerError);

        return c.json({ 
            msg: "Failed to update product" 
        });
    }
});


productRouter.delete("/:id", async (c) => {
    try {
        const id = c.req.param('id');

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())

        await prisma.product.delete({
            where: { 
                id 
            },
        });

        return c.json({ 
            msg: "Product deleted successfully" 
        }, { status: StatusCode.OK });

    } catch (e) {
       
        c.status(StatusCode.InternalServerError);
        return c.json({ 
            msg: "Failed to delete product" 
        });
    }
});

