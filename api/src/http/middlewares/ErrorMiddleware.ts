import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
// import logger from "../../libs/logger";
import { Prisma } from "@prisma/client";
import { AppError } from "../../libs/errors/AppError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ErrorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    const errorMessages = error.errors.map((issue: any) => ({
      path: issue.path[0],
      message: issue.message,
    }));

    // logger.error(errorMessages);
    return res.status(405).json({
      error: true,
      status: "error",
      message: "Invalid Input",
      details: errorMessages,
    });
  }

  if (error instanceof AppError) {
    if (error.isOperational) {
      // logger.error(error.message);
      return res.status(error.statusCode).json({
        error: true,
        status: "error",
        message: error.message,
      });
    }
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      console.error("Unique constraint error: ", error);

      const fieldName = error.meta?.target;
      return res.status(500).json({
        error: true,
        status: "error",
        message: `${fieldName} is already registered.`,
      });
    }
  }

  // logger.error(error);
  return res.status(500).json({
    error: true,
    status: "error",
    message: "An unexpected error occured.",
  });
};
