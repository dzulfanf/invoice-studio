"use client"

import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { useCreateInvoice } from "../hooks/use-create-invoice"
import {
  invoiceFormSchema,
} from "@/features/invoices/schemas/invoice-schema"
import { z } from "zod"
import { useRouter } from "next/navigation"
import type { Invoice } from "../types/invoice"
import { useUpdateInvoice } from "../hooks/use-update-invoice"
import { toast } from "sonner"

type InvoiceFormProps =
  | {
      mode: "create"
      invoice?: never
    }
  | {
      mode: "edit"
      invoice: Invoice
    }

export function InvoiceForm({
  mode,
  invoice,
}: InvoiceFormProps) {
  const router = useRouter()
  const createInvoice = useCreateInvoice()
  const updateInvoice = useUpdateInvoice()

  const isSubmitting =
    createInvoice.isPending || updateInvoice.isPending

  const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm<
    z.input<typeof invoiceFormSchema>,
    unknown,
    z.output<typeof invoiceFormSchema>
  >({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      invoiceNumber: invoice?.invoiceNumber ?? "",
      customerName: invoice?.customer.name ?? "",
      customerEmail: invoice?.customer.email ?? "",
      issueDate: invoice?.issueDate ?? "",
      dueDate: invoice?.dueDate ?? "",
      amount: invoice?.amount,
      description: invoice?.description ?? "",
    },
  })

  function onSubmit(
    values: z.output<typeof invoiceFormSchema>,
  ) {
    if (mode === "edit" && invoice) {
      updateInvoice.mutate(
        {
          id: invoice.id,
          input: {
            invoiceNumber: values.invoiceNumber,
            customer: {
              name: values.customerName,
              email: values.customerEmail,
            },
            issueDate: values.issueDate,
            dueDate: values.dueDate,
            amount: values.amount,
            description: values.description,
          },
        },
        {
          onSuccess: (updatedInvoice) => {
            toast.success("Invoice updated successfully")
            router.push(`/invoices/${updatedInvoice.id}`)
          },
          onError: () => {
            // toast.error("Failed to update invoice")
          },
        },
      )

      return
    }

    createInvoice.mutate(
      {
        invoiceNumber: values.invoiceNumber,
        customer: {
          name: values.customerName,
          email: values.customerEmail,
        },
        issueDate: values.issueDate,
        dueDate: values.dueDate,
        amount: values.amount,
        description: values.description,
      },
      {
        onSuccess: (createdInvoice) => {
          toast.success("Invoice created successfully")
          router.push(`/invoices/${createdInvoice.id}`)
        },
        onError: () => {
          // toast.error("Failed to create invoice")
        },
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="customer-name">
                Customer name
              </Label>

              <Input
                id="customer-name"
                placeholder="Acme Corporation"
                {...register("customerName")}
              />

              {errors.customerName && (
                <p className="text-xs text-destructive">
                  {errors.customerName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="customer-email">
                Email
              </Label>

              <Input
                id="customer-email"
                type="email"
                placeholder="customer@example.com"
                {...register("customerEmail")}
              />

              {errors.customerEmail && (
                <p className="text-xs text-destructive">
                  {errors.customerEmail.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invoice details</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="invoice-number">
                  Invoice number
                </Label>

                <Input
                  id="invoice-number"
                  placeholder="INV-0001"
                  {...register("invoiceNumber")}
                />

                {errors.invoiceNumber && (
                  <p className="text-xs text-destructive">
                    {errors.invoiceNumber.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>

                <Input
                  id="amount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="1500"
                  {...register("amount")}
                />

                {errors.amount && (
                  <p className="text-xs text-destructive">
                    {errors.amount.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="issue-date">
                  Issue date
                </Label>

                <Input
                  id="issue-date"
                  type="date"
                  {...register("issueDate")}
                />

                {errors.issueDate && (
                  <p className="text-xs text-destructive">
                    {errors.issueDate.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="due-date">
                  Due date
                </Label>

                <Input
                  id="due-date"
                  type="date"
                  {...register("dueDate")}
                />

                {errors.dueDate && (
                  <p className="text-xs text-destructive">
                    {errors.dueDate.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description
              </Label>

              <Textarea
                id="description"
                placeholder="Add a description for this invoice..."
                rows={4}
                {...register("description")}
              />

              {errors.description && (
                <p className="text-xs text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between border-t pt-6">
          {
             mode === "create" ?
              <Link
                href="/invoices"
                className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                Cancel
              </Link>
            : <div></div>
          }

          <div className="flex items-center gap-4">
            {(createInvoice.isError || updateInvoice.isError) && (
              <p className="text-xs text-destructive">
                {mode === "edit"
                  ? "Failed to update invoice."
                  : "Failed to create invoice."}
              </p>
            )}

            <Button type="submit" disabled={isSubmitting}>
              <Save />

              {isSubmitting
                ? mode === "edit"
                  ? "Saving..."
                  : "Creating..."
                : mode === "edit"
                  ? "Save changes"
                  : "Create invoice"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}