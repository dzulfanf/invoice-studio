import { invoices } from "@/features/invoices/mocks/invoices";
import { createMockInvoiceRepository } from "./mock-invoice-repository";

export const invoiceRepository = createMockInvoiceRepository(invoices);
