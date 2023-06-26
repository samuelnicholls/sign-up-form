import { z } from "Zod";

export const signUpSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});