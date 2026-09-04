import React from "react";
import Sidebar from "../src/shared/ui/Sidebar";
import DashboardNavBar from "../src/shared/ui/DashboardNavBar";
import AtmCard from "../src/widgets/BillingUI/AtmCard";
import InvoiceTable from "../src/widgets/BillingUI/InvoiceTable";
import BillingInfo from "../src/widgets/BillingUI/BillingInfo";
import Footer from "@/components/Layouts/Footer";
import Transactions from "../src/widgets/BillingUI/Transactions";

export default function page() {
  return (
    <main className="p-6 flex flex-row">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-[82%] px-8">
        <DashboardNavBar pageTitle="Billings" />
        <div className="flex mt-6 gap-6 mb-16">
          <div className="w-[70%]">
            <AtmCard />
          </div>
          <div className="w-[30%]">
            <InvoiceTable />
          </div>
        </div>

        <div className="mb-12 flex gap-8">
          <div className="w-3/5">
            <BillingInfo />
          </div>
          <div className="w-2/5">
            <Transactions />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
