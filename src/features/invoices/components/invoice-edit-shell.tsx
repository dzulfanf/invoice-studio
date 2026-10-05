import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Skeleton } from "@/components/ui/skeleton"

type InvoiceEditShellProps = {
  id: string
  children?: React.ReactNode
  isLoading?: boolean
}

export function InvoiceEditShell({
  id,
  children,
  isLoading = false,
}: InvoiceEditShellProps) {
  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8 space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <Skeleton className="h-5 w-24" />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <Skeleton className="h-5 w-32" />

            <div className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>

              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <Link
          href={`/invoices/${id}`}
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to invoice
        </Link>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight">
          Edit invoice
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Update the invoice details for your customer.
        </p>
      </div>

      {children}
    </div>
  )
}