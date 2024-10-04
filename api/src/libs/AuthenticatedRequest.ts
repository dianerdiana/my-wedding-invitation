import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

// Define the structure of your JWT payload, extending JwtPayload
export interface UserPayload extends JwtPayload {
  userId: number;
  username: string;
}

// Extend the Express Request interface to include the user property
export interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}
