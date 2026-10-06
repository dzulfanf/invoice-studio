import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";

import { invoices } from "../mocks/invoices";
import { InvoiceForm } from "./invoice-form";

const meta = {
  title: "Invoices/Invoice Form",
  component: InvoiceForm,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    mode: "create",
  },
};

export const Edit: Story = {
  args: {
    mode: "edit",
    invoice: invoices[0],
  },
};

export const Validation: Story = {
  args: {
    mode: "create",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: "Create invoice" }),
    );

    await expect(
      canvas.findByText("Customer name is required"),
    ).resolves.toBeVisible();
    await expect(
      canvas.findByText("Invoice number is required"),
    ).resolves.toBeVisible();
  },
};

export const SubmitCreate: Story = {
  args: {
    mode: "create",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.type(
      canvas.getByLabelText("Customer name"),
      "Storybook Co",
    );
    await userEvent.type(
      canvas.getByLabelText("Email"),
      "billing@storybook.test",
    );
    await userEvent.type(
      canvas.getByLabelText("Invoice number"),
      "INV-STORY-001",
    );
    await userEvent.type(canvas.getByLabelText("Amount"), "1750");
    await userEvent.type(canvas.getByLabelText("Issue date"), "2026-10-01");
    await userEvent.type(canvas.getByLabelText("Due date"), "2026-10-15");
    await userEvent.click(
      canvas.getByRole("button", { name: "Create invoice" }),
    );

    await expect(
      body.findByText("Invoice created successfully"),
    ).resolves.toBeVisible();
  },
};

export const SubmitEdit: Story = {
  args: {
    mode: "edit",
    invoice: invoices[0],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const customerName = canvas.getByLabelText("Customer name");

    await userEvent.clear(customerName);
    await userEvent.type(customerName, "Acme Corporation Updated");
    await userEvent.click(canvas.getByRole("button", { name: "Save changes" }));

    await expect(
      body.findByText("Invoice updated successfully"),
    ).resolves.toBeVisible();
  },
};
