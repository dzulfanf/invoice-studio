import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useInvoiceRepository } from "@/features/invoices/providers/invoice-repository-provider";

import { invoiceKeys } from "./use-invoices";
import type { UpdateInvoiceInput } from "../types/invoice";

export function useUpdateInvoice() {
  const queryClient = useQueryClient();
  const repository = useInvoiceRepository();

  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UpdateInvoiceInput }) =>
      repository.update(id, input),

    onSuccess: (invoice) => {
      queryClient.setQueryData(invoiceKeys.detail(invoice.id), invoice);

      queryClient.invalidateQueries({
        queryKey: invoiceKeys.list(),
      });
    },
  });
}
