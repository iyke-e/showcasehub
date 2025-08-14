import * as z from  "zod"

export const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string(),
})

export const fullSignupSchema = z.object({
    name: z.string().min(2, "Full name must be more than 2 characters"),
    email: z.email("Invalid email address"),
    password: z.string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/[A-Z]/, "Password must contain at least 1 capital letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase leter"),
    agree: z.literal(true, { message: "You must agree to the terms and conditions" })
    
})

export const signupSchema = fullSignupSchema.transform(
  ({ name, email, password }) => ({
    name,
    email,
    password,
  })
);


export type LoginSchemaType = z.infer<typeof loginSchema>
export type FullSignupSchemaType = z.infer<typeof fullSignupSchema>
export type SignupSchemaType = z.infer<typeof signupSchema>