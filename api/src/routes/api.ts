import { login } from "@controllers/AuthController";
import express from "express";

const router = express.Router();

router.post("auth/login", login);

export const ApiRoutes = router;
