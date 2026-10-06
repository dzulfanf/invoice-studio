import { InvoiceDetail } from "@/features/invoices/components/invoice-detail";

type InvoiceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function InvoiceDetailPage({
  params,
}: InvoiceDetailPageProps) {
  const { id } = await params;

  return <InvoiceDetail id={id} />;
}
