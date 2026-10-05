import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  createInvoice,
} from "@/features/invoices/api/invoices"

import { invoiceKeys } from "./use-invoices"
import type { CreateInvoiceInput } from "../types/invoice"

export function useCreateInvoice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (input: CreateInvoiceInput) =>
      createInvoice(input),

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