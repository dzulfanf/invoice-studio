import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { invoices } from "../mocks/invoices"
import { InvoiceStoryProvider } from "../stories/invoice-story-provider"
import { InvoiceList } from "./invoice-list"

const meta = {
  title: "Invoices/Invoice List",
  component: InvoiceList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InvoiceStoryProvider invoices={invoices}>
      <InvoiceList />
    </InvoiceStoryProvider>
  ),
}

export const Empty: Story = {
  render: () => (
    <InvoiceStoryProvider invoices={[]}>
      <InvoiceList />
    </InvoiceStoryProvider>
  ),
}
