import { Hono } from 'hono';
import { mainRouter } from './routes';


const app = new Hono();

app.route("/api/v1", mainRouter);

export default app

