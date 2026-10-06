import { Badge } from "@/components/ui/badge";
import type { InvoiceStatus } from "@/features/invoices/types/invoice";

type InvoiceStatusBadgeProps = {
  status: InvoiceStatus;
};

const statusConfig: Record<
  InvoiceStatus,
  {
    label: string;
  }
> = {
  draft: {
    label: "Draft",
  },
  sent: {
    label: "Sent",
  },
  paid: {
    label: "Paid",
  },
  overdue: {
    label: "Overdue",
  },
};

export function InvoiceStatusBadge({ status }: InvoiceStatusBadgeProps) {
  return <Badge variant="secondary">{statusConfig[status].label}</Badge>;
}
