import express from "express";

// Controllers
import { login } from "@controllers/AuthController";
import { createGuestList, getAllGuestList } from "@controllers/GuestListController";

// Middlewares
import { AuthMiddleware } from "@middlewares/AuthMiddleware";

const router = express.Router();

router.post("/auth/login", login);

// GuestList Rutes
router.post("/guests/create", AuthMiddleware, createGuestList);
router.get("/guests/list", AuthMiddleware, getAllGuestList);

export const ApiRoutes = router;
