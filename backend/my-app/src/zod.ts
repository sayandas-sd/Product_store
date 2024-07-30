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