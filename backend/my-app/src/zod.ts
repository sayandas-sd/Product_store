import { z } from "zod";

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5),
    name: z.string().optional()
})

export type signupSchema = z.infer<typeof signupSchema>

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5),  
})

export type signinSchema = z.infer<typeof signinSchema>


export const orderItemSchema = z.object({
    price: z.number().positive(),
    quantity: z.number().int().positive(),
    productId: z.string().uuid()
})

export const createOrderSchema = z.object({
    address: z.string().uuid(),
    items: z.array(orderItemSchema).nonempty()
})

export type createOrderSchema = z.infer<typeof createOrderSchema>

export const profileSchema = z.object({
    email: z.string().email(),
    address: z.object({
        name: z.string(),
        mobile: z.number(),
        pincode: z.number(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        landmark: z.string()
    })
})

export type profileSchema = z.infer<typeof profileSchema>

export const productSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    price: z.number().positive(),
    inventory: z.number().positive(),
    image: z.string().url().optional(),
    categoryId: z.string().uuid()
})

export type productSchema = z.infer<typeof productSchema>


