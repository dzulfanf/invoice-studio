"use client"

import { useMemo, useState } from "react"

import { useInvoices } from "@/features/invoices/hooks/use-invoices"

import { InvoiceFilters } from "./invoice-filters"
import { InvoiceTable } from "./invoice-table"
import { InvoiceListSkeleton } from "./invoice-list-skeleton"
import { InvoiceListState } from "./invoice-list-state"

export function InvoiceList() {
  const { data, refetch, isPending, isError } = useInvoices()

  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")

  const filteredInvoices = useMemo(() => {
    if (!data) {
      return []
    }

    const normalizedSearch = search.trim().toLowerCase()

    return data.filter((invoice) => {
      const matchesSearch =
        !normalizedSearch ||
        invoice.invoiceNumber
          .toLowerCase()
          .includes(normalizedSearch) ||
        invoice.customer.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        invoice.customer.email
          .toLowerCase()
          .includes(normalizedSearch)

      const matchesStatus =
        status === "all" ||
        invoice.status === status

      return matchesSearch && matchesStatus
    })
  }, [data, search, status])

  if (isPending) {
    return <InvoiceListSkeleton />
  }

  if (isError) {
    return <InvoiceListState type="error" onRetry={refetch} />
  }

  const hasFilters =
    Boolean(search.trim()) || status !== "all"

  return (
    <div className="space-y-6">
      <InvoiceFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      {!filteredInvoices.length ? (
        <div className="rounded-xl border py-12 text-center">
          <p className="font-medium">
            {hasFilters
              ? "No matching invoices"
              : "No invoices yet"}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {hasFilters
              ? "Try adjusting your search or filter."
              : "Create your first invoice to get started."}
          </p>
        </div>
      ) : (
        <InvoiceTable invoices={filteredInvoices} />
      )}
    </div>
  )
}