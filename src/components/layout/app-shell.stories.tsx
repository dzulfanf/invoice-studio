import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { AppShell } from "./app-shell"

const meta = {
  title: "Layout/App Shell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppShell>

export default meta

type Story = StoryObj<typeof meta>

export const Invoices: Story = {
  args: {
    children: (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Invoices</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track your invoices.
        </p>
      </div>
    ),
  },
}

export const Dashboard: Story = {
  args: {
    children: (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your business.
        </p>
      </div>
    ),
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        pathname: "/",
      },
    },
  },
}
