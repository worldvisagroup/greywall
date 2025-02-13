import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(3)
    .refine((val) => /^[a-zA-Z\s]+$/.test(val), {
      message: "Name must contain only letters and spaces",
    }),
  phoneNumber: z.string().refine((val) => /^\d{10}$/.test(val), {
    message: "Phone number must be exactly 10 digits",
  }),
  projectType: z.string().nonempty("Select your project type!"),
  budget: z.string().nonempty("Select your budget"),
  // location: z.string().nonempty("Please,Enter the property location"),
});

export const EnquiryContactFormSchema = z.object({
  name: z
    .string()
    .min(3)
    .refine((val) => /^[a-zA-Z\s]+$/.test(val), {
      message: "Name must contain only letters and spaces",
    }),
  phoneNumber: z.string().refine((val) => /^\d{10}$/.test(val), {
    message: "Phone number must be exactly 10 digits",
  }),
  email: z.string().email("Invalid email address"),
});
