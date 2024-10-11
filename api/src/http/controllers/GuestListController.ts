import { BadRequestError } from "./../../libs/errors/BadRequestError";
import { NotFoundError } from "./../../libs/errors/NotFoundError";
import { UnauthorizedError } from "./../../libs/errors/UnauthorizedError";
import { db } from "./../../config/db";
import { AuthenticatedRequest } from "./../../libs/AuthenticatedRequest";
import { NextFunction, Response } from "express";

import { CreateGuestListInput, createGuestListSchema } from "./../validations/GuestListValidation";

type InputGuestList = {
  data: CreateGuestListInput;
};

export const createGuestList = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = req.body as InputGuestList;
    const userId = req.user?.userId;

    await createGuestListSchema.parseAsync(data);

    if (!userId) {
      throw new UnauthorizedError("Unauthenticated User!");
    }

    const newGuestList = await db.guestList.createMany({
      data: data.map((dta) => ({
        ...dta,
        userId,
      })),
    });

    res.status(201).json({
      error: false,
      message: "success",
      data: newGuestList,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllGuestList = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const allGuestList = await db.guestList.findMany({
      where: {
        userId: req.user?.userId,
      },
    });

    res.status(200).json({
      error: false,
      message: "success",
      data: allGuestList,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStatusGuestList = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, status } = req.body;

    const statusTextToUpdate = status === "BELUM" ? "SUDAH" : "BELUM";
    const guestList = await db.guestList.update({
      data: {
        status: statusTextToUpdate,
        userId: req.user?.userId,
      },
      where: {
        id,
      },
    });

    res.status(200).json({
      error: false,
      message: "success",
      data: guestList,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteGuestList = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const guestListId = parseInt(id);

    if (isNaN(guestListId)) {
      throw new BadRequestError("Daftar tamu tidak valid!");
    }

    const guestList = await db.guestList.findUnique({
      where: {
        id: guestListId,
      },
    });

    if (!guestList) {
      throw new NotFoundError("Daftar tamu tidak ditemukan!");
    }

    await db.guestList.delete({
      where: { id: guestListId },
    });

    res.status(200).json({
      error: false,
      message: "Daftar tamu berhasil dihapus.",
    });
  } catch (error) {
    next(error);
  }
};
