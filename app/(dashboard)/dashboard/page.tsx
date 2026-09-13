"use client";
import { signOut } from "next-auth/react";
import React from "react";
import Footer from "@/components/Layouts/Footer";
import DashboardNavBar from "@/app/src/shared/ui/DashboardNavBar";
import AmountCard from "@/app/src/widgets/dashboardUi/AmountCard";
import HeroSection from "@/app/src/widgets/dashboardUi/HeroSection";
import { UserChart } from "@/app/src/widgets/dashboardUi/UserChart";
import SalesOverview from "@/app/src/widgets/dashboardUi/SalesOverview";
import Tables from "@/app/src/widgets/dashboardUi/Tables";
import OrdersOverview from "@/app/src/widgets/dashboardUi/OrdersOverview";

export default function page() {
  return (
    <main className="p-6 flex flex-row">
      {/* <div className="w-[18%]"><Sidebar /></div> */}
      <div className="px-8">
        <DashboardNavBar pageTitle="Dashboard" />
        <div className="py-6">
          <AmountCard />
          <HeroSection />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-6">
          <UserChart />
          <SalesOverview />
        </div>

        <div className="mb-8 flex gap-6">
          <div className="w-[70%]">
            <Tables />
          </div>
          <div className="w-[30%]">
            <OrdersOverview />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
