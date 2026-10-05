import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  updateInvoice,
} from "@/features/invoices/api/invoices"

import { invoiceKeys } from "./use-invoices"
import type { UpdateInvoiceInput } from "../types/invoice"

export function useUpdateInvoice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      input,
    }: {
      id: string
      input: UpdateInvoiceInput
    }) => updateInvoice(id, input),

    onSuccess: (invoice) => {
      queryClient.setQueryData(
        invoiceKeys.detail(invoice.id),
        invoice,
      )

      queryClient.invalidateQueries({
        queryKey: invoiceKeys.list(),
      })
    },
  })
}