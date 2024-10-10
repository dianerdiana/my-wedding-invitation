import express from "express";

// Controllers
import { login } from "@controllers/AuthController";
import {
  createGuestList,
  deleteGuestList,
  getAllGuestList,
} from "@controllers/GuestListController";
import { createReservation } from "@controllers/ReservationController";

// Middlewares
import { AuthMiddleware } from "@middlewares/AuthMiddleware";

const router = express.Router();

router.post("/auth/login", login);

// GuestList Routes
router.post("/guests/create", AuthMiddleware, createGuestList);
router.get("/guests/list", AuthMiddleware, getAllGuestList);
router.delete("/guests/delete/:id", AuthMiddleware, deleteGuestList);

// Reservation Routes
router.post("/reservations/create", AuthMiddleware, createReservation);

export const ApiRoutes = router;
