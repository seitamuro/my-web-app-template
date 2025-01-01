import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { auth } from "./middlewares/auth";

const app = new Hono();

app.use("*", logger());
app.use("*", cors());

app.get("/hello", (c) => {
  return c.text("Hello, World!");
});

app.get("/hello-auth", auth, (c) => {
  return c.text("Hello, Authenticated World!");
});

export const handler = handle(app);
