import { z } from "Zod";
import { signUpSchema } from "./schemas";

export type SignUpInformation = z.infer<typeof signUpSchema>
