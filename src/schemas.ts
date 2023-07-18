import { z } from "Zod";

export const signUpSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  emailAddress: z.string().email(),
  password: z.string(),
  terms: z.boolean()
});