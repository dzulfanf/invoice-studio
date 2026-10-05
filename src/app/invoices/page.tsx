import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { InvoiceList } from "@/features/invoices/components/invoice-list"
import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:flex-row md:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Invoices
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage and track your invoices.
          </p>
        </div>
        
        <Link
          href="/invoices/new"
          className="mt-0.5 inline-flex h-8 items-center justify-center gap-2 rounded-md bg-primary px-3.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Plus className="size-4" />
          New invoice
        </Link>
      </div>

      <div className="mt-8">
        <InvoiceList />
      </div>
    </div>
  )
}