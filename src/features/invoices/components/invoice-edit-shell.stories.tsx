import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InvoiceEditShell } from "./invoice-edit-shell";

const meta = {
  title: "Invoices/Invoice Edit Shell",
  component: InvoiceEditShell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceEditShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    id: "inv_001",
    isLoading: true,
  },
};

export const Ready: Story = {
  args: {
    id: "inv_001",
    children: <div className="bg-card rounded-xl border p-6">Invoice form</div>,
  },
};
