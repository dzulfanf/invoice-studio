import type { Preview } from "@storybook/nextjs-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

import { Toaster } from "../src/components/ui/sonner";
import "../src/app/globals.css";
import { InvoiceRepositoryProvider } from "../src/features/invoices/api/invoice-repository-provider";
import { createMockInvoiceRepository } from "../src/features/invoices/api/mock-invoice-repository";
import { invoices } from "../src/features/invoices/mocks/invoices";

type StorybookProvidersProps = {
  children: ReactNode;
};

function StorybookProviders({ children }: StorybookProvidersProps) {
  const [repository] = useState(() => createMockInvoiceRepository(invoices));
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            staleTime: 30_000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <InvoiceRepositoryProvider repository={repository}>
        {children}
        <Toaster />
      </InvoiceRepositoryProvider>
    </QueryClientProvider>
  );
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <StorybookProviders>
        <Story />
      </StorybookProviders>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        pathname: "/invoices",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "error",
    },
  },
};

export default preview;
