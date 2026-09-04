import React from "react";
import Sidebar from "../src/shared/ui/Sidebar";
import DashboardNavBar from "../src/shared/ui/DashboardNavBar";
import Navbar from "../src/widgets/ProfileUI/Navbar";
import NameTag from "../src/widgets/ProfileUI/NameTag";
import Hero from "../src/widgets/ProfileUI/Hero";
import ProfileProject from "../src/widgets/ProfileUI/ProfileProject";

export default function page() {
  return (
    <main className="p-6 flex flex-row">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-[82%] px-8">
        <div className="navbar bg-cover bg-no-repeat bg-center h-64 rounded-2xl p-4">
          <Navbar />
        </div>
        <div className="px-5 -mt-16 mb-16">
          <NameTag />
        </div>
        <div className="mb-16">
          <Hero />
        </div>
        <div>
          <ProfileProject />
        </div>
      </div>
    </main>
  );
}
