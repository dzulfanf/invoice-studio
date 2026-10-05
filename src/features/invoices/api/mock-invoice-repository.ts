import type {
  CreateInvoiceInput,
  Invoice,
  UpdateInvoiceInput,
} from "../types/invoice"
import type { InvoiceRepository } from "./invoice-repository"

function cloneInvoice(invoice: Invoice): Invoice {
  return {
    ...invoice,
    customer: { ...invoice.customer },
  }
}

export function createMockInvoiceRepository(
  initialInvoices: Invoice[] = [],
): InvoiceRepository {
  let records = initialInvoices.map(cloneInvoice)

  return {
    async list() {
      return records.map(cloneInvoice)
    },

    async getById(id) {
      const invoice = records.find((record) => record.id === id)

      return invoice ? cloneInvoice(invoice) : null
    },

    async create(input) {
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

      records = [...records, invoice]

      return cloneInvoice(invoice)
    },

    async update(id, input) {
      const index = records.findIndex((record) => record.id === id)

      if (index === -1) {
        throw new Error("Invoice not found")
      }

      const existingInvoice = records[index]
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

      records = records.map((record, recordIndex) =>
        recordIndex === index ? updatedInvoice : record,
      )

      return cloneInvoice(updatedInvoice)
    },
  }
}
