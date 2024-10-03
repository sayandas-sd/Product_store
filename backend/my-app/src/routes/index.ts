import { Hono } from "hono";
import { userRouter } from "./user";
import { orderRouter } from "./orderItem";
import { productRouter } from "./products";
import { categoryRouter } from "./categories";


export const mainRouter = new Hono();


mainRouter.route("/user", userRouter);
mainRouter.route("/orders", orderRouter);
mainRouter.route("/products", productRouter);
mainRouter.route("/category", categoryRouter);