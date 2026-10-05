import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { invoices } from "../mocks/invoices"
import { InvoiceForm } from "./invoice-form"

const meta = {
  title: "Invoices/Invoice Form",
  component: InvoiceForm,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceForm>

export default meta

type Story = StoryObj<typeof meta>

export const Create: Story = {
  args: {
    mode: "create",
  },
}

export const Edit: Story = {
  args: {
    mode: "edit",
    invoice: invoices[0],
  },
}
