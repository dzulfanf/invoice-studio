import Link from "next/link"
import { RefreshCw, TriangleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type InvoiceListStateProps = {
  type: "error" | "empty"
  onRetry?: () => void
}

const stateConfig = {
  error: {
    icon: TriangleAlert,
    title: "Something went wrong",
    description:
      "We couldn't load your invoices. Please try again.",
  },
  empty: {
    icon: TriangleAlert,
    title: "No invoices yet",
    description:
      "Create your first invoice to get started.",
  },
}

export function InvoiceListState({
  type,
  onRetry,
}: InvoiceListStateProps) {
  const config = stateConfig[type]
  const Icon = config.icon

  return (
    <Card>
      <CardContent className="flex min-h-[320px] flex-col items-center justify-center text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted">
          <Icon className="size-5 text-muted-foreground" />
        </div>

        <h1 className="mt-5 text-3xl font-semibold">
          {config.title}
        </h1>

        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {config.description}
        </p>

        {type === "error" && onRetry && (
          <Button
            variant="outline"
            className="mt-6"
            onClick={onRetry}
          >
            <RefreshCw className="size-4" />
            Try again
          </Button>
        )}

        {type === "empty" && (
          <Button className="mt-6">
            <Link href="/invoices/new">
              Create invoice
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}