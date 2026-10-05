"use client"

import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type InvoiceFiltersProps = {
  search: string
  status: string
  onSearchChange: (value: string) => void
  onStatusChange: (value: string) => void
}

export function InvoiceFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: InvoiceFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search invoices..."
          className="pl-9"
        />
      </div>

      <Select
        value={status}
        onValueChange={(value) => {
          if (value) {
            onStatusChange(value)
          }
        }}
      >
        <SelectTrigger className="w-full sm:w-[160px]">
          <SelectValue placeholder="Filter status">
            {{
              all: "All statuses",
              draft: "Draft",
              sent: "Sent",
              paid: "Paid",
              overdue: "Overdue",
            }[status] ?? "Filter status"}
          </SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All statuses
          </SelectItem>
          <SelectItem value="draft">
            Draft
          </SelectItem>
          <SelectItem value="sent">
            Sent
          </SelectItem>
          <SelectItem value="paid">
            Paid
          </SelectItem>
          <SelectItem value="overdue">
            Overdue
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}