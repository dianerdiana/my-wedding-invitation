import { z } from "zod";

export const createReservationSchema = z.object({
  name: z.string(),
  message: z.string(),
  attendanceStatus: z.string(),
});

export type CreateReservationInput = z.infer<typeof createReservationSchema>;
