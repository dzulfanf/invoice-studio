import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { invoices } from "../mocks/invoices";
import type { Invoice } from "../types/invoice";
import { InvoiceTable } from "./invoice-table";

const invoiceWithoutDescription: Invoice = {
  ...invoices[0],
  description: undefined,
};

const meta = {
  title: "Invoices/Invoice Table",
  component: InvoiceTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllInvoices: Story = {
  args: {
    invoices,
  },
};

export const SingleInvoice: Story = {
  args: {
    invoices: [invoices[0]],
  },
};

export const WithoutDescription: Story = {
  args: {
    invoices: [invoiceWithoutDescription],
  },
};
