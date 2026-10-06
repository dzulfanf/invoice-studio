import Link from "next/link";
import { ArrowLeft, FileQuestion, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type InvoiceDetailStateProps = {
  type: "error" | "not-found";
  backHref?: string;
  backLabel?: string;
};

const stateConfig = {
  error: {
    icon: TriangleAlert,
    title: "Something went wrong",
    description: "We couldn't load this invoice. Please try again.",
  },
  "not-found": {
    icon: FileQuestion,
    title: "Invoice not found",
    description:
      "The invoice you're looking for doesn't exist or may have been removed.",
  },
};

export function InvoiceDetailState({
  type,
  backHref = "/invoices",
  backLabel = "Back to invoices",
}: InvoiceDetailStateProps) {
  const config = stateConfig[type];
  const Icon = config.icon;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Card>
        <CardContent className="flex min-h-[320px] flex-col items-center justify-center text-center">
          <div className="bg-muted flex size-12 items-center justify-center rounded-full">
            <Icon className="text-muted-foreground size-5" />
          </div>

          <h1 className="mt-5 text-3xl font-semibold">{config.title}</h1>

          <p className="text-muted-foreground mt-2 max-w-md text-sm">
            {config.description}
          </p>

          <Button variant="outline" className="mt-6">
            <Link href={backHref}>
              <div className="flex items-center gap-1">
                <ArrowLeft className="size-4" />
                {backLabel}
              </div>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
