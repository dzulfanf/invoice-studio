import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useInvoiceRepository } from "@/features/invoices/api/invoice-repository-provider"

import { invoiceKeys } from "./use-invoices"
import type { CreateInvoiceInput } from "../types/invoice"

export function useCreateInvoice() {
  const queryClient = useQueryClient()
  const repository = useInvoiceRepository()

  return useMutation({
    mutationFn: (input: CreateInvoiceInput) =>
      repository.create(input),

    onSuccess: (invoice) => {
      queryClient.setQueryData(
        invoiceKeys.detail(invoice.id),
        invoice,
      )

      queryClient.invalidateQueries({
        queryKey: invoiceKeys.all,
      })
    },
  })
}
