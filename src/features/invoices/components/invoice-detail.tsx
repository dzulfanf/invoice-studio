"use client";

import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InvoiceStatusBadge } from "./invoice-status-badge";
import { useInvoice } from "@/features/invoices/hooks/use-invoice";
import { Skeleton } from "@/components/ui/skeleton";
import { InvoiceDetailState } from "./invoice-detail-state";

type InvoiceDetailProps = {
  id: string;
};

export function InvoiceDetail({ id }: InvoiceDetailProps) {
  const { data: invoice, isPending, isError } = useInvoice(id);

  function InvoiceDetailSkeleton() {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="space-y-8">
          <div className="space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <Card>
              <CardHeader>
                <Skeleton className="h-5 w-32" />
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="space-y-3">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-56" />
                </div>

                <div className="grid gap-6 border-t pt-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>

                  <div className="space-y-3">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Skeleton className="h-5 w-32" />
              </CardHeader>

              <CardContent className="space-y-6">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-9 w-36" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (isPending) {
    return <InvoiceDetailSkeleton />;
  }

  if (isError) {
    return <InvoiceDetailState type="error" />;
  }

  if (!invoice) {
    return <InvoiceDetailState type="not-found" />;
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/invoices"
          className="text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to invoices
        </Link>

        <Link
          href={`/invoices/${invoice.id}/edit`}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 items-center justify-center gap-2 rounded-md px-3.5 text-xs font-medium transition-colors"
        >
          <Pencil className="size-3" />
          Edit invoice
        </Link>
      </div>

      {/* Invoice heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            {invoice.invoiceNumber}
          </h1>

          <p className="text-muted-foreground mt-1 text-sm">
            {invoice.customer.name}
          </p>
        </div>

        <InvoiceStatusBadge status={invoice.status} />
      </div>

      {/* Content */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main information */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold">Invoice details</h2>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Customer */}
            <section>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Customer
              </p>

              <div className="mt-3">
                <p className="font-medium">{invoice.customer.name}</p>

                <p className="text-muted-foreground mt-1 text-sm">
                  {invoice.customer.email}
                </p>
              </div>
            </section>

            {/* Dates */}
            <section className="grid gap-6 border-t pt-6 sm:grid-cols-2">
              <div>
                <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  Issue date
                </p>

                <p className="mt-2 text-sm font-medium">{invoice.issueDate}</p>
              </div>

              <div>
                <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  Due date
                </p>

                <p className="mt-2 text-sm font-medium">{invoice.dueDate}</p>
              </div>
            </section>

            {/* Description */}
            {invoice.description && (
              <section className="border-t pt-6">
                <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  Description
                </p>

                <p className="mt-3 text-sm leading-6">{invoice.description}</p>
              </section>
            )}
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="h-fit">
          <CardHeader>
            <h2 className="font-semibold">Invoice summary</h2>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground text-sm">Total amount</p>

            <p className="mt-2 text-3xl font-semibold tracking-tight">
              {invoice.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
