"use client"

import { useInvoice } from "../hooks/use-invoice"
import { InvoiceDetailState } from "./invoice-detail-state"
import { InvoiceEditShell } from "./invoice-edit-shell"
import { InvoiceForm } from "./invoice-form"

type InvoiceEditProps = {
  id: string
}

export function InvoiceEdit({ id }: InvoiceEditProps) {
  const {
    data: invoice,
    isPending,
    isError,
  } = useInvoice(id)

  if (isPending) {
    return (
      <InvoiceEditShell
        id={id}
        isLoading
      />
    )
  }

  if (isError) {
    return <InvoiceDetailState type="error" />
  }

  if (!invoice) {
    return <InvoiceDetailState type="not-found" />
  }

  return (
    <InvoiceEditShell id={id}>
      <InvoiceForm
        mode="edit"
        invoice={invoice}
      />
    </InvoiceEditShell>
  )
}