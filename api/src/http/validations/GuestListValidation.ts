import { z } from "zod";

export const createGuestListSchema = z
  .array(
    z.object({
      name: z.string(),
      phone: z.string().optional(),
      invitationText: z.string(),
    })
  )
  .min(1);

export type CreateGuestListInput = z.infer<typeof createGuestListSchema>;
