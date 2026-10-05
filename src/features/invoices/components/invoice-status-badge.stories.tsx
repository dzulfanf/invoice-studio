import type { Meta, StoryObj } from '@storybook/nextjs';

import {
  InvoiceStatusBadge
} from './invoice-status-badge';

const meta = {
  title: 'Invoices/Invoice Status Badge',
  component: InvoiceStatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Draft: Story = {
  args: {
    status: 'draft',
  },
};

export const Sent: Story = {
  args: {
    status: 'sent',
  },
};

export const Paid: Story = {
  args: {
    status: 'paid',
  },
};

export const Overdue: Story = {
  args: {
    status: 'overdue',
  },
};

export const Cancelled: Story = {
  args: {
    status: 'cancelled',
  },
};