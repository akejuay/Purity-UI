import React from "react";
import Sidebar from "../src/shared/ui/Sidebar";
import DashboardNavBar from "../src/shared/ui/DashboardNavBar";
import AuthorTable from "../src/widgets/TablesUI/AuthorTable";

export default function page() {
  return (
    <main className="p-6 flex flex-row">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-[82%] px-8">
        <DashboardNavBar pageTitle="Tables" />
        <div className="pt-6">
          <AuthorTable />
        </div>
      </div>
    </main>
  );
}
