"use client";

import { usePathname } from "next/navigation";
import Avater from "@/public/avater.jpg";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DashboardNavBar({ pageTitle }: { pageTitle: string }) {
  const pathName = usePathname();

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-gray-500 text-sm">
            Pages <span className="text-black font-medium"> {pathName}</span>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 start-3 my-auto h-4 w-4 text-muted-foreground"
            />
            <Input
              placeholder="Type here..."
              className="h-9 w-48 bg-card ps-9 text-sm shadow-none lg:w-56 border border-gray-300 outline-teal-300 py-2 rounded-full px-4 placeholder:text-gray-500 placeholder:text-sm"
            />
          </div>
          {/* <input
            type="search"
            placeholder="Type here..."
            className="border border-gray-300 outline-teal-300 py-2 rounded-full px-4 placeholder:text-gray-500 placeholder:text-sm"
          /> */}
          <Link href="/profile">
            <i className="ri-user-line text-gray-400 hover:text-white hover:bg-teal-300 hover:p-2 rounded-full hover:transition-all duration-500" />
          </Link>
          <i className="ri-settings-5-line text-gray-400 text-lg"></i>
          <Bell className="text-sm text-gray-400 h-4 w-4" />
        </div>
      </div>
      <h5 className="text-lg font-medium text-gray-700">{pageTitle}</h5>
    </>
  );
}
