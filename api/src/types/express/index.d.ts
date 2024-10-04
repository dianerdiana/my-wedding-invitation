type UserPayload = {
  userId: number;
  username: string;
};

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload; // Menambahkan properti user ke Request
    }
  }
}
