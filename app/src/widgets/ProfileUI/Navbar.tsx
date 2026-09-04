import { Bell } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-sm">
            Pages <span className="text-white font-medium"> /profile</span>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="search"
            placeholder="Type here..."
            className="border border-white outline-white py-2 rounded-full px-4 placeholder:text-gray-400 placeholder:text-sm bg-white"
          />
          <Link href="/profile">
            <i className="ri-user-line text-white hover:text-white hover:bg-teal-300 hover:p-2 rounded-full hover:transition-all duration-500" />
          </Link>
          <i className="ri-settings-5-line text-lg text-white"></i>
          <Bell className="text-sm h-4 w-4 text-white" />
        </div>
      </div>
      <h5 className="text-lg font-medium text-white">Profile</h5>
    </div>
  );
}
