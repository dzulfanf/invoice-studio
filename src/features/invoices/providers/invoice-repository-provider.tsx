"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { InvoiceRepository } from "../api/invoice-repository";

const InvoiceRepositoryContext = createContext<InvoiceRepository | null>(null);

type InvoiceRepositoryProviderProps = {
  children: ReactNode;
  repository: InvoiceRepository;
};

export function InvoiceRepositoryProvider({
  children,
  repository,
}: InvoiceRepositoryProviderProps) {
  return (
    <InvoiceRepositoryContext.Provider value={repository}>
      {children}
    </InvoiceRepositoryContext.Provider>
  );
}

export function useInvoiceRepository() {
  const repository = useContext(InvoiceRepositoryContext)

  if (!repository) {
    throw new Error(
      "useInvoiceRepository must be used within InvoiceRepositoryProvider",
    )
  }

  return repository
}
