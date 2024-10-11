import express from "express";

// Controllers

// Middlewares
import { login } from "../http/controllers/AuthController";
import { AuthMiddleware } from "../http/middlewares/AuthMiddleware";
import {
  createGuestList,
  deleteGuestList,
  getAllGuestList,
} from "../http/controllers/GuestListController";
import { createReservation } from "../http/controllers/ReservationController";

const router = express.Router();

router.post("/auth/login", login);

// GuestList Routes
router.post("/guests/create", AuthMiddleware, createGuestList);
router.get("/guests/list", AuthMiddleware, getAllGuestList);
router.delete("/guests/delete/:id", AuthMiddleware, deleteGuestList);

// Reservation Routes
router.post("/reservations/create", AuthMiddleware, createReservation);

export const ApiRoutes = router;
