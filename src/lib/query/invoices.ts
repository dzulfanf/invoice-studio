import { useQuery } from "@tanstack/react-query"

import { getInvoices } from "@/lib/api/invoices"

export const invoiceKeys = {
  all: ["invoices"] as const,
  list: () => [...invoiceKeys.all, "list"] as const,
}

export function useInvoices() {
  return useQuery({
    queryKey: invoiceKeys.list(),
    queryFn: getInvoices,
  })
}