import { invoices } from "@/mocks/invoices"
import type { Invoice } from "@/types/invoice"

const delay = (ms = 300) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export async function getInvoices(): Promise<Invoice[]> {
  await delay()

  return invoices
}