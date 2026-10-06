import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { invoices } from "../mocks/invoices";
import { InvoiceStoryProvider } from "../stories/invoice-story-provider";
import { InvoiceEdit } from "./invoice-edit";

const meta = {
  title: "Invoices/Invoice Edit",
  component: InvoiceEdit,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceEdit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: invoices[0].id,
  },
  render: (args) => (
    <InvoiceStoryProvider invoiceId={args.id} invoice={invoices[0]}>
      <InvoiceEdit {...args} />
    </InvoiceStoryProvider>
  ),
};

export const NotFound: Story = {
  args: {
    id: "inv_missing",
  },
  render: (args) => (
    <InvoiceStoryProvider invoiceId={args.id} invoice={null}>
      <InvoiceEdit {...args} />
    </InvoiceStoryProvider>
  ),
};
