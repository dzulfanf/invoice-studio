"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"

const navigation = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Invoices",
    href: "/invoices",
    icon: FileText,
  },
  {
    label: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background md:block">
      <div className="flex min-h-screen flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <span className="font-semibold tracking-tight">
            Invoice Studio
          </span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navigation.map(({ label, href, icon: Icon }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href)

            return (
              <Link
                key={href}
                href={href}
                className={[
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                ].join(" ")}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}