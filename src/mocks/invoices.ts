import type { Invoice } from "@/types/invoice"

export const invoices: Invoice[] = [
  {
    id: "inv_001",
    invoiceNumber: "INV-2026-001",
    customer: {
      id: "cus_001",
      name: "Acme Corporation",
      email: "finance@acme.test",
    },
    issueDate: "2026-09-01",
    dueDate: "2026-09-15",
    amount: 2400,
    status: "paid",
    description: "Frontend development services",
  },
  {
    id: "inv_002",
    invoiceNumber: "INV-2026-002",
    customer: {
      id: "cus_002",
      name: "Northstar Studio",
      email: "billing@northstar.test",
    },
    issueDate: "2026-09-05",
    dueDate: "2026-09-20",
    amount: 1850,
    status: "paid",
    description: "UI engineering services",
  },
  {
    id: "inv_003",
    invoiceNumber: "INV-2026-003",
    customer: {
      id: "cus_003",
      name: "Acme Labs",
      email: "finance@acmelabs.test",
    },
    issueDate: "2026-09-18",
    dueDate: "2026-10-02",
    amount: 3200,
    status: "sent",
    description: "Product development",
  },
  {
    id: "inv_004",
    invoiceNumber: "INV-2026-004",
    customer: {
      id: "cus_004",
      name: "Orbit Systems",
      email: "accounts@orbit.test",
    },
    issueDate: "2026-09-22",
    dueDate: "2026-10-06",
    amount: 1250,
    status: "overdue",
    description: "Consulting services",
  },
  {
    id: "inv_005",
    invoiceNumber: "INV-2026-005",
    customer: {
      id: "cus_005",
      name: "Pixel House",
      email: "hello@pixelhouse.test",
    },
    issueDate: "2026-09-25",
    dueDate: "2026-10-10",
    amount: 2750,
    status: "draft",
    description: "Design system implementation",
  },
]