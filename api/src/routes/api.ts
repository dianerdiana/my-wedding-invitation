import express from "express";

// Controllers

// Middlewares
import { login } from "../http/controllers/AuthController";
import { AuthMiddleware } from "../http/middlewares/AuthMiddleware";
import {
  createGuestList,
  deleteGuestList,
  getAllGuestList,
  updateStatusGuestList,
} from "../http/controllers/GuestListController";
import { createReservation, getAllReservations } from "../http/controllers/ReservationController";

const router = express.Router();

router.post("/auth/login", login);

// GuestList Routes
router.post("/guests/create", AuthMiddleware, createGuestList);
router.get("/guests/list", AuthMiddleware, getAllGuestList);
router.delete("/guests/delete/:id", AuthMiddleware, deleteGuestList);
router.patch("/guests/update/:id", AuthMiddleware, updateStatusGuestList);

// Reservation Routes
router.get("/reservations/list", getAllReservations);
router.post("/reservations/create", createReservation);

export const ApiRoutes = router;
