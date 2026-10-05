import { Badge } from '@/components/ui/badge';

export type InvoiceStatus =
  | 'draft'
  | 'sent'
  | 'paid'
  | 'overdue'
  | 'cancelled';

interface InvoiceStatusBadgeProps {
  status: InvoiceStatus;
}

const statusConfig: Record<
  InvoiceStatus,
  {
    label: string;
  }
> = {
  draft: {
    label: 'Draft',
  },
  sent: {
    label: 'Sent',
  },
  paid: {
    label: 'Paid',
  },
  overdue: {
    label: 'Overdue',
  },
  cancelled: {
    label: 'Cancelled',
  },
};

export function InvoiceStatusBadge({
  status,
}: InvoiceStatusBadgeProps) {
  return (
    <Badge variant="secondary">
      {statusConfig[status].label}
    </Badge>
  );
}