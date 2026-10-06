import { InvoiceEdit } from "@/features/invoices/components/invoice-edit";

type InvoiceEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function InvoiceEditPage({
  params,
}: InvoiceEditPageProps) {
  const { id } = await params;

  return <InvoiceEdit id={id} />;
}
