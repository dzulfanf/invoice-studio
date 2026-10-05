import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, type ReactNode } from "react"

import { invoiceKeys } from "../hooks/use-invoices"
import type { Invoice } from "../types/invoice"

type InvoiceStoryProviderProps = {
  children: ReactNode
  invoices?: Invoice[]
  invoiceId?: string
  invoice?: Invoice | null
}

export function InvoiceStoryProvider({
  children,
  invoices,
  invoiceId,
  invoice,
}: InvoiceStoryProviderProps) {
  const [queryClient] = useState(() => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          retry: false,
          staleTime: Infinity,
        },
      },
    })

    if (invoices !== undefined) {
      client.setQueryData(invoiceKeys.list(), invoices)
    }

    if (invoiceId !== undefined && invoice !== undefined) {
      client.setQueryData(invoiceKeys.detail(invoiceId), invoice)
    }

    return client
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
