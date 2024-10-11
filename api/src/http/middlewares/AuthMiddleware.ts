import { NextFunction, Response } from "express";
import { UnauthorizedError } from "../../libs/errors/UnauthorizedError";
import { verifyToken } from "../../libs/jwt";
import { AuthenticatedRequest } from "../../libs/AuthenticatedRequest";

export const AuthMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  // Mendapatkan token dari header atau query parameter atau body
  const token = req.header("Authorization")?.split(" ")[1];

  // Memeriksa apakah token ada
  if (!token) {
    throw new UnauthorizedError("Token denied!");
  }

  try {
    // Verifikasi token
    const decoded = verifyToken(token);

    if (decoded) {
      // Menyimpan payload token untuk digunakan di middleware lainnya atau rute
      req.user = decoded as UserPayload;

      // Melanjutkan ke middleware atau rute berikutnya
      next();
    } else {
      throw new UnauthorizedError("Token denied!");
    }
  } catch (error) {
    next(error);
  }
};
