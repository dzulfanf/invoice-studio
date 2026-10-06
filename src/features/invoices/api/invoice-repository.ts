import type {
  CreateInvoiceInput,
  Invoice,
  UpdateInvoiceInput,
} from "../types/invoice";

export type InvoiceRepository = {
  list: () => Promise<Invoice[]>;
  getById: (id: string) => Promise<Invoice | null>;
  create: (input: CreateInvoiceInput) => Promise<Invoice>;
  update: (id: string, input: UpdateInvoiceInput) => Promise<Invoice>;
};
