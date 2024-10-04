import { UnauthorizedError } from "@libs/errors/UnauthorizedError";
import { verifyToken } from "@libs/jwt";
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

// Define the structure of your JWT payload, extending JwtPayload
interface UserPayload extends JwtPayload {
  userId: string;
  username: string;
}

// Extend the Express Request interface to include the user property
interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

const AuthMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  // Mendapatkan token dari header atau query parameter atau body
  const token = req.header("Authorization")?.split(" ")[1];

  // Memeriksa apakah token ada
  if (!token) {
    throw new UnauthorizedError("Token denied!");
  }

  try {
    // Verifikasi token
    const decoded = verifyToken(token);

    // Menyimpan payload token untuk digunakan di middleware lainnya atau rute
    req.user = decoded as UserPayload;

    // Melanjutkan ke middleware atau rute berikutnya
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = AuthMiddleware;
