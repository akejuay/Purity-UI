import DashboardNavBar from "@/app/src/shared/ui/DashboardNavBar";
import AuthorTable from "@/app/src/widgets/TablesUI/AuthorTable";
import React from "react";

export default function page() {
  return (
    <main className="p-6">
      {/* <div className="w-[18%]">
        <Sidebar />
      </div> */}
      <div className="px-8">
        <DashboardNavBar pageTitle="Tables" />
        <div className="pt-6">
          <AuthorTable />
        </div>
      </div>
    </main>
  );
}
