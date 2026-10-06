"use client";

import { createContext, useContext, type ReactNode } from "react";

import { invoiceRepository } from "./invoices";
import type { InvoiceRepository } from "./invoice-repository";

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
  return useContext(InvoiceRepositoryContext) ?? invoiceRepository;
}
