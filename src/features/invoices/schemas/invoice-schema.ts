import { z } from "zod";

export const invoiceFormSchema = z
  .object({
    invoiceNumber: z.string().trim().min(1, "Invoice number is required"),

    customerName: z.string().trim().min(1, "Customer name is required"),

    customerEmail: z.string().trim().email("Enter a valid email address"),

    issueDate: z.string().min(1, "Issue date is required"),

    dueDate: z.string().min(1, "Due date is required"),

    amount: z.coerce.number().positive("Amount must be greater than 0"),

    description: z.string().trim().optional(),
  })
  .refine((data) => data.dueDate >= data.issueDate, {
    message: "Due date must be after issue date",
    path: ["dueDate"],
  });

export type InvoiceFormValues = z.infer<typeof invoiceFormSchema>;
