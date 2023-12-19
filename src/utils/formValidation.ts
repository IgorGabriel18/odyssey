import { z } from "zod";

export const validationSchema = z.object({
    email: z.string().email("Invalid email!")
});

export type ValidationSchemaProps = z.infer<typeof validationSchema>;
