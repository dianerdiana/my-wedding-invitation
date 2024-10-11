import { NextFunction, Response, Request } from "express";
import { createReservationSchema } from "../validations/ReservationValidation";
import { db } from "../../config/db";
import { AuthenticatedRequest } from "../../libs/AuthenticatedRequest";

export const createReservation = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, message, attendanceStatus } = req.body;

    await createReservationSchema.parseAsync({ name, message, attendanceStatus });

    const newReservation = await db.reservation.create({
      data: {
        name: name as string,
        message: message as string,
        attendanceStatus: attendanceStatus as string,
      },
    });

    res.status(201).json({
      error: false,
      message: "success",
      data: newReservation,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllReservations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allReservations = await db.reservation.findMany();

    res.status(200).json({
      error: false,
      message: "success",
      data: allReservations,
    });
  } catch (error) {
    next(error);
  }
};
