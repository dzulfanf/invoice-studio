import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { InvoiceForm } from "@/features/invoices/components/invoice-form";

export default function NewInvoicePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <Link
          href="/invoices"
          className="text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to invoices
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight">
          Create invoice
        </h1>

        <p className="text-muted-foreground mt-1 text-sm">
          Create a new invoice for your customer.
        </p>
      </div>

      <InvoiceForm mode="create" />
    </div>
  );
}
