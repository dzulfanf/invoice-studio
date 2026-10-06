import { ReactNode } from "react";

import { Sidebar } from "./sidebar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="bg-muted/30 flex min-h-screen">
      <Sidebar />

      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
