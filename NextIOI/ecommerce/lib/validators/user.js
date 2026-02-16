import { z } from "zod";

const PasswordSchema = z
    .string()
    .min(8, 'Password must be min of length 8')
    .regex(/[A-Z]/, 'Must contain at least one uppercase char')
    .regex(/[a-z]/, 'Must contain at least one lowercase char')
    .regex(/[0-9]/, 'Must contain at least one number')

export const signupSchema = z.object({
    email: z.string().email("Invalid email"),
    password: PasswordSchema
});