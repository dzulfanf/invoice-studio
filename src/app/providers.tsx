"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { invoiceRepository } from "@/features/invoices/api/invoice-repository-instance";
import { InvoiceRepositoryProvider } from "@/features/invoices/providers/invoice-repository-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
          },
        },
      }),
  );

  return (
    <InvoiceRepositoryProvider repository={invoiceRepository}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </InvoiceRepositoryProvider>
  );
}
