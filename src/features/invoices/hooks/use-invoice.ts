import { useQuery } from "@tanstack/react-query"

import { useInvoiceRepository } from "@/features/invoices/api/invoice-repository-provider"

import { invoiceKeys } from "./use-invoices"

export function useInvoice(id: string) {
  const repository = useInvoiceRepository()

  return useQuery({
    queryKey: invoiceKeys.detail(id),
    queryFn: () => repository.getById(id),
    enabled: Boolean(id),
  })
}
