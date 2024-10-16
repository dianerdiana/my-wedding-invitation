import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { ErrorMiddleware } from "./http/middlewares/ErrorMiddleware";
import { ApiRoutes } from "./routes/api";
import path from "path";
import "mysql2";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(express.static(path.join(__dirname, "public")))
    .use(express.static(path.join(__dirname, "uploads")))
    .get("/", (_, res) => {
      res.render("Hello World!");
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    })
    .use("/api", ApiRoutes)
    .use(ErrorMiddleware);

  return app;
};
