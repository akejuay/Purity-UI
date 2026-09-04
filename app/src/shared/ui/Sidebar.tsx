"use client";

import purityLogo from "@/public/logo.png";
import questionMark from "@/public/questionmark.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

const sideBarLinks = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: "home-office-line",
  },
  {
    name: "Tables",
    link: "/tables",
    icon: "bar-chart-line",
  },
  {
    name: "Billing",
    link: "/billing",
    icon: "bank-card-line",
  },
  {
    name: "RTL",
    link: "/rtl",
    icon: "rocket-line",
  },
];

const accountPageLink = [
  {
    name: "Profile",
    link: "/profile",
    icon: "user-line",
    color: "text-gray-500",
    iconBg: "text-teal-300",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[18%] h-screen fixed left-0 z-50 flex flex-col px-4 py-6">
      {/* Logo */}

      <div className="flex gap-2 items-center">
        <Image src={purityLogo} height={20} width={20} alt="Logo" />

        <Link href="/" className="uppercase text-sm font-medium text-[#2D3748]">
          purity ui dashboard
        </Link>
      </div>

      <hr className="text-gray-200 my-6" />

      {/* Main Links */}
      <div className="overflow-y-scroll h-screen px-2">
        <ul className="space-y-2">
          {sideBarLinks.map((item) => {
            const isActive = pathname === item.link;

            return (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`
                  flex items-center gap-2 px-4 py-4 rounded-2xl
                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-white/40 shadow shadow-gray-200"
                      : "hover:bg-gray-100 shadow-gray-200 hover:shadow"
                  }
                `}
                >
                  <div>
                    <i
                      className={`ri-${item.icon} text-sm p-2 rounded-xl shadow-2xl

                    ${
                      isActive
                        ? "bg-teal-400 text-white"
                        : "bg-white/25 text-teal-300"
                    }`}
                    ></i>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? "text-[#2D3748]" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Account Pages */}

        <h4 className="text-gray-700 font-medium uppercase my-8 text-sm">
          Account Pages
        </h4>
        <ul className="space-y-2">
          {accountPageLink.map((item) => {
            const isActive = pathname === item.link;

            return (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`
                  flex items-center gap-2 px-4 py-4 rounded-2xl
                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-white/40 shadow shadow-gray-200"
                      : "hover:bg-gray-100 shadow-gray-200 hover:shadow"
                  }
                `}
                >
                  <div>
                    <i
                      className={`ri-${item.icon} text-sm p-2 rounded-xl shadow-2xl

                    ${
                      isActive
                        ? "bg-teal-400 text-white"
                        : "bg-white/25 text-teal-300"
                    }`}
                    ></i>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? "text-[#2D3748]" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}

          {/* Logout */}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="
          flex items-center gap-4
          text-red-500
          font-semibold
          px-4 py-3
          rounded-2xl
          hover:bg-red-500 text-sm
          hover:text-white
          transition-all duration-300
          w-full
          cursor-pointer
        "
          >
            <i className="ri-logout-box-line text-sm" />

            <span>Log Out</span>
          </button>
        </ul>
      </div>
      {/* Help Card */}

      <div className="card bg-center rounded-2xl bg-cover bg-no-repeat p-2 mt-2 h-40 mb-2">
        <Image
          src={questionMark}
          alt="Question mark"
          className="h-5 w-5 mb-4"
        />

        <h5 className="font-medium text-white text-sm mb-2">Need help?</h5>

        <p className="text-[10px] text-white mb-4">Check out our docs</p>

        <button className="w-full uppercase bg-white text-black py-3 text-[10px] font-medium rounded-2xl cursor-pointer">
          Documentation
        </button>
      </div>
    </aside>
  );
}
