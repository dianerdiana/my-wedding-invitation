import { NextFunction, Response } from "express";
import { createReservationSchema } from "../validations/ReservationValidation";
import { db } from "../../config/db";
import { AuthenticatedRequest } from "../../libs/AuthenticatedRequest";

export const createReservation = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, message, attendaceStatus } = req.body;

    await createReservationSchema.parseAsync({ name, message, attendaceStatus });

    const newReservation = await db.reservation.create({
      data: {
        name: name as string,
        message: message as string,
        attendaceStatus: attendaceStatus as string,
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
