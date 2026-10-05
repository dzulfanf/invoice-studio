import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useState } from "react"

import { InvoiceFilters } from "./invoice-filters"

function InvoiceFiltersStory() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")

  return (
    <InvoiceFilters
      search={search}
      status={status}
      onSearchChange={setSearch}
      onStatusChange={setStatus}
    />
  )
}

const meta = {
  title: "Invoices/Invoice Filters",
  component: InvoiceFilters,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  render: () => <InvoiceFiltersStory />,
} satisfies Meta<typeof InvoiceFilters>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    search: "",
    status: "all",
    onSearchChange: () => undefined,
    onStatusChange: () => undefined,
  },
}
