import { z } from "Zod";

export const signUpSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  emailAddress: z.string().email(),
  password: z.string(),
  terms: z.boolean()
});