import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InvoiceListSkeleton } from "./invoice-list-skeleton";

const meta = {
  title: "Invoices/Invoice List Skeleton",
  component: InvoiceListSkeleton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceListSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
