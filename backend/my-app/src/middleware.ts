
import { Hono } from "hono"
import { verify } from 'hono/jwt'
import { StatusCode } from "./statuscode";
import type { Context } from 'hono';

export const validationRouter = new Hono<{
    Bindings : {
        DATABASE_URL: string;
        JWT_SECRET: string;
      },
    Variables: {
        userId: string;
    }
}>();


export const authMiddleWare = async (c: Context, next: () => Promise<void>) => {

    const authHolder = c.req.header("authorization") || "";

    if(!authHolder || !authHolder.startsWith('Bearer')) {
        return c.json({
            msg:"wrong input"
        }, {status: StatusCode.BadRequest})
    }

    const token = authHolder.split(' ')[1];

    try{
        const decoded = await verify(token, c.env.JWT_SECRET); 

        if(decoded && typeof decoded.id === 'string') {
            c.set('userId', decoded.id)
            await next()
            
        } else {
            return c.json({
                msg: "not authorized" 
            },{status: StatusCode.Unauthorized});
        }

    } catch (e) {
        return c.json({
            msg: "you are not valid"
        }, {
            status: StatusCode.Forbidden
        })
    }
}
