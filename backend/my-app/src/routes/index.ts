import { Hono } from "hono";
import { userRouter } from "./user";
import { orderRouter } from "./orderItem";




export const mainRouter = new Hono();


mainRouter.route("/user", userRouter);
mainRouter.route("/orders", orderRouter);


