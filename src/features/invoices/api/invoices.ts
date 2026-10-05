import type { CreateInvoiceInput, Invoice, UpdateInvoiceInput } from "@/features/invoices/types/invoice"
import { invoices } from "@/features/invoices/mocks/invoices"

export async function getInvoices(): Promise<Invoice[]> {
  return invoices
}

export async function getInvoice(id: string): Promise<Invoice | null> {
  return invoices.find((invoice) => invoice.id === id) ?? null
}

export async function createInvoice(
  input: CreateInvoiceInput,
): Promise<Invoice> {
  const invoice: Invoice = {
    id: crypto.randomUUID(),
    invoiceNumber: input.invoiceNumber,
    customer: {
      id: crypto.randomUUID(),
      name: input.customer.name,
      email: input.customer.email,
    },
    issueDate: input.issueDate,
    dueDate: input.dueDate,
    amount: input.amount,
    status: "draft",
    description: input.description,
  }

  invoices.push(invoice)

  return invoice
}

export async function updateInvoice(
  id: string,
  input: UpdateInvoiceInput,
): Promise<Invoice> {
  const index = invoices.findIndex(
    (invoice) => invoice.id === id,
  )

  if (index === -1) {
    throw new Error("Invoice not found")
  }

  const existingInvoice = invoices[index]

  const updatedInvoice: Invoice = {
    ...existingInvoice,
    invoiceNumber: input.invoiceNumber,
    customer: {
      ...existingInvoice.customer,
      name: input.customer.name,
      email: input.customer.email,
    },
    issueDate: input.issueDate,
    dueDate: input.dueDate,
    amount: input.amount,
    description: input.description,
  }

  invoices[index] = updatedInvoice

  return updatedInvoice
}