export type InvoiceStatus =
  | "draft"
  | "sent"
  | "paid"
  | "overdue"

export type InvoiceCustomer = {
  id: string
  name: string
  email: string
}

export type Invoice = {
  id: string
  invoiceNumber: string
  customer: InvoiceCustomer
  issueDate: string
  dueDate: string
  amount: number
  status: InvoiceStatus
  description?: string
}