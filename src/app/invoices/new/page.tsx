import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { InvoiceForm } from "@/features/invoices/components/invoice-form"

export default function NewInvoicePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <Link
          href="/invoices"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to invoices
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight">
          Create invoice
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Create a new invoice for your customer.
        </p>
      </div>

      <InvoiceForm mode="create" />
    </div>
  )
}
