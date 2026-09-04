"use client";
import { signOut } from "next-auth/react";
import React from "react";
import Sidebar from "../src/shared/ui/Sidebar";
import DashboardNavBar from "../src/shared/ui/DashboardNavBar";
import AmountCard from "../src/widgets/dashboardUi/AmountCard";
import HeroSection from "../src/widgets/dashboardUi/HeroSection";
import { UserChart } from "../src/widgets/dashboardUi/UserChart";
import SalesOverview from "../src/widgets/dashboardUi/SalesOverview";
import Tables from "../src/widgets/dashboardUi/Tables";
import OrdersOverview from "../src/widgets/dashboardUi/OrdersOverview";
import Footer from "@/components/Layouts/Footer";

export default function page() {
  return (
    <main className="p-6 flex flex-row">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-[82%] px-8">
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
