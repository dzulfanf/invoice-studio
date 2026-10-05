import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { invoices } from "../mocks/invoices"
import { InvoiceStoryProvider } from "../stories/invoice-story-provider"
import { InvoiceDetail } from "./invoice-detail"

const meta = {
  title: "Invoices/Invoice Detail",
  component: InvoiceDetail,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceDetail>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: invoices[0].id,
  },
  render: (args) => (
    <InvoiceStoryProvider invoiceId={args.id} invoice={invoices[0]}>
      <InvoiceDetail {...args} />
    </InvoiceStoryProvider>
  ),
}

export const NotFound: Story = {
  args: {
    id: "inv_missing",
  },
  render: (args) => (
    <InvoiceStoryProvider invoiceId={args.id} invoice={null}>
      <InvoiceDetail {...args} />
    </InvoiceStoryProvider>
  ),
}
