import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InvoiceList } from "@/features/invoices/components/invoice-list";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:flex-row md:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Invoices</h1>

          <p className="text-muted-foreground mt-1 text-sm">
            Manage and track your invoices.
          </p>
        </div>

        <Link
          href="/invoices/new"
          className="bg-primary text-primary-foreground hover:bg-primary/90 mt-0.5 inline-flex h-8 items-center justify-center gap-2 rounded-md px-3.5 text-xs font-medium transition-colors"
        >
          <Plus className="size-4" />
          New invoice
        </Link>
      </div>

      <div className="mt-8">
        <InvoiceList />
      </div>
    </div>
  );
}
