import { Skeleton } from "@/components/ui/skeleton";

export function InvoiceListSkeleton() {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-7 w-full sm:w-80" />

        <Skeleton className="h-7 w-full sm:w-40" />
      </div>

      {/* Table */}
      <div className="bg-card overflow-hidden rounded-xl border">
        <div className="min-w-[900px]">
          <div className="bg-muted/30 flex h-10 items-center gap-6 border-b px-6">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="ml-auto h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>

          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex min-h-[76px] items-center gap-6 border-b px-6 last:border-0"
            >
              <div className="w-40 space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>

              <div className="w-48 space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-36" />
              </div>

              <Skeleton className="h-4 w-24" />

              <Skeleton className="h-4 w-24" />

              <Skeleton className="ml-auto h-4 w-20" />

              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
