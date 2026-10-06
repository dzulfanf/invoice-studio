import { useQuery } from "@tanstack/react-query";

import { useInvoiceRepository } from "@/features/invoices/api/invoice-repository-provider";

export const invoiceKeys = {
  all: ["invoices"] as const,

  list: () => [...invoiceKeys.all, "list"] as const,

  detail: (id: string) => [...invoiceKeys.all, "detail", id] as const,
};

export function useInvoices() {
  const repository = useInvoiceRepository();

  return useQuery({
    queryKey: invoiceKeys.list(),
    queryFn: repository.list,
  });
}
