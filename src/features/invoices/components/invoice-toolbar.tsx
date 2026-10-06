"use client";

import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

type InvoiceToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function InvoiceToolbar({
  search,
  onSearchChange,
}: InvoiceToolbarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search invoices..."
          className="pl-9"
        />
      </div>

      <Select defaultValue="all">
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="sent">Sent</SelectItem>
          <SelectItem value="paid">Paid</SelectItem>
          <SelectItem value="overdue">Overdue</SelectItem>
        </SelectContent>
      </Select>

      <Link href="/invoices/new">
        <Button>
          <Plus />
          New invoice
        </Button>
      </Link>
    </div>
  );
}
