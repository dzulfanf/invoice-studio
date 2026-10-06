import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InvoiceDetailState } from "./invoice-detail-state";

const meta = {
  title: "Invoices/Invoice Detail State",
  component: InvoiceDetailState,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceDetailState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    type: "not-found",
  },
};

export const Error: Story = {
  args: {
    type: "error",
  },
};
