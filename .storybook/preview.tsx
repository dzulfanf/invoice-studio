import type { Preview } from "@storybook/nextjs-vite"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, type ReactNode } from "react"

import { Toaster } from "../src/components/ui/sonner"
import "../src/app/globals.css"
import { InvoiceRepositoryProvider } from "../src/features/invoices/api/invoice-repository-provider"
import { createMockInvoiceRepository } from "../src/features/invoices/api/mock-invoice-repository"

type StorybookProvidersProps = {
  children: ReactNode
}

function StorybookProviders({ children }: StorybookProvidersProps) {
  const [repository] = useState(() => createMockInvoiceRepository())
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
  )

  return (
    <QueryClientProvider client={queryClient}>
      <InvoiceRepositoryProvider repository={repository}>
        {children}
        <Toaster />
      </InvoiceRepositoryProvider>
    </QueryClientProvider>
  )
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
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
}

export default preview
