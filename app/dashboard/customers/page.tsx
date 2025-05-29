import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers"
}

interface PageProps {
  searchParams?: {
    query?: string;
    page?: string
  }
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || "";
  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  )
}
