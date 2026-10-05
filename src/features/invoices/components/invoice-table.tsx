import type { Invoice } from "@/features/invoices/types/invoice"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { InvoiceStatusBadge } from "./invoice-status-badge"
import Link from "next/link"

type InvoiceTableProps = {
  invoices: Invoice[]
}

export function InvoiceTable({ invoices }: InvoiceTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table className="min-w-[900px]">
        <TableHeader>
          <TableRow className="bg-muted/30 hover:bg-muted/30">
            <TableHead className="px-6">Invoice</TableHead>
            <TableHead className="px-6">Customer</TableHead>
            <TableHead className="px-6">Issue date</TableHead>
            <TableHead className="px-6">Due date</TableHead>
            <TableHead className="px-6 text-right">
              Amount
            </TableHead>
            <TableHead className="px-6">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="px-6 py-4">
                <Link
                  href={`/invoices/${invoice.id}`}
                  className="group"
                >
                  <p className="font-medium group-hover:underline">
                    {invoice.invoiceNumber}
                  </p>

                  {invoice.description && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {invoice.description}
                    </p>
                  )}
                </Link>
              </TableCell>

              <TableCell className="px-6 py-4">
                <p className="text-sm font-medium">
                  {invoice.customer.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {invoice.customer.email}
                </p>
              </TableCell>

              <TableCell className="px-6 py-4 text-sm text-muted-foreground">
                {invoice.issueDate}
              </TableCell>

              <TableCell className="px-6 py-4 text-sm text-muted-foreground">
                {invoice.dueDate}
              </TableCell>

              <TableCell className="px-6 py-4 text-right text-sm font-medium">
                {invoice.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>

              <TableCell className="px-6 py-4">
                <InvoiceStatusBadge status={invoice.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}