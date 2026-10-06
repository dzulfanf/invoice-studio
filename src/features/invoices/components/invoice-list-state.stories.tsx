import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InvoiceListState } from "./invoice-list-state";

const meta = {
  title: "Invoices/Invoice List State",
  component: InvoiceListState,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceListState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    type: "empty",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    onRetry: () => undefined,
  },
};
