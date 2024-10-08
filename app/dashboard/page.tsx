import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import {
    fetchRevenue,
    fetchLatestInvoices,
    fetchCardData,
} from "@/app/lib/data";

export default async function Page() {
    // A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests.
    // In the case of data fetching, each request can only begin once the previous request has returned data.
    // There may be cases where you want waterfalls because you want a condition to be satisfied before you make the next request
    // However, this behavior can also be unintentional and impact performance.
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={numberOfCustomers} type="customers" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    );
}
