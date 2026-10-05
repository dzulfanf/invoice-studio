import { useQuery } from "@tanstack/react-query"

import { getInvoice } from "@/features/invoices/api/invoices"

import { invoiceKeys } from "./use-invoices"

export function useInvoice(id: string) {
  return useQuery({
    queryKey: invoiceKeys.detail(id),
    queryFn: () => getInvoice(id),
    enabled: Boolean(id),
  })
}