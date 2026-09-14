import DashboardNavBar from "@/app/src/shared/ui/DashboardNavBar";
import AtmCard from "@/app/src/widgets/BillingUI/AtmCard";
import BillingInfo from "@/app/src/widgets/BillingUI/BillingInfo";
import InvoiceTable from "@/app/src/widgets/BillingUI/InvoiceTable";
import Transactions from "@/app/src/widgets/BillingUI/Transactions";
import Footer from "@/components/Layouts/Footer";
import React from "react";

export default function page() {
  return (
    <main className="p-6 flex flex-row">
      {/* <div className="w-[18%]">
        <Sidebar />
      </div> */}
      <div className=" px-8">
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
