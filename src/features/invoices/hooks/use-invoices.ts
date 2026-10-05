import { useQuery } from "@tanstack/react-query"

import { getInvoices } from "@/features/invoices/api/invoices"

export const invoiceKeys = {
  all: ["invoices"] as const,

  list: () => [...invoiceKeys.all, "list"] as const,

  detail: (id: string) =>
    [...invoiceKeys.all, "detail", id] as const,
}

export function useInvoices() {
  return useQuery({
    queryKey: invoiceKeys.list(),
    queryFn: getInvoices,
  })
}