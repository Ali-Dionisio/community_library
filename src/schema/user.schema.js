import { z } from "zod";

const userSchema = z.object({
    username: z.string().min(3, "Username is required"),
    email: z.email("Invalid email"), 
    password: z.string().min(6, "Password must be at least 6 characteres long"),
    avatar: z.url("invalid URL").optional(),
})

const userIdSchema = z.object({
    userId: z.number().int().positive('User ID must be a  positive integer')
});

export { userSchema, userIdSchema };