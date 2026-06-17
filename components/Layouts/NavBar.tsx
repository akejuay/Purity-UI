import Image from "next/image";
import purityLogo from "../../public/logo.png";
import React from "react";
import Link from "next/link";

const Links = [
  {
    id: 1,
    icon: "ri-box-3-fill",
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    icon: "ri-user-3-fill",
    name: "Profile",
    link: "/profile",
  },
  {
    id: 3,
    icon: "ri-user-2-fill",
    name: "sign up",
    link: "/sign-up",
  },
  {
    id: 4,
    icon: "ri-key-2-fill",
    name: "sign in",
    link: "/sign-in",
  },
];

export default function SigninNavBar() {
  return (
    <nav
      className={`max-w-6xl mx-auto my-6 flex items-center justify-between px-8 rounded-2xl z-50 sticky py-4 shadow-2xl bg-white/80`}
    >
      <div className="flex gap-2 items-center">
        <Image src={purityLogo} height={20} width={20} alt="Logo" />
        <Link
          href="/"
          className={`uppercase text-sm font-medium text-[#2D3748]`}
        >
          <span>purity ui dashboard</span>
        </Link>
      </div>

      <ul className="flex gap-10">
        {Links.map((items) => (
          <div key={items.id}>
            <li className="flex gap-1 items-center">
              <i className={`${items.icon} text-[#2D3748]`}></i>
              <Link
                href={items.link}
                className={`text-[#2D3748] uppercase text-sm font-medium`}
              >
                {items.name}
              </Link>
            </li>
          </div>
        ))}
      </ul>

      <div>
        <button className="bg-linear-to-r from-[#313860] to-[#151928] text-white py-2 px-8 rounded-full text-sm cursor-pointer">
          Free Download
        </button>
      </div>
    </nav>
  );
}

export function SignupNavBar() {
  return (
    <nav
      className={`max-w-6xl mx-auto flex items-center justify-between px-8 rounded-2xl z-50 sticky py-4 bg-transparent`}
    >
      <div className="flex gap-2 items-center">
        <Image src={purityLogo} height={20} width={20} alt="Logo" />
        <Link href="/" className={`uppercase text-sm font-medium text-white`}>
          <span>purity ui dashboard</span>
        </Link>
      </div>

      <ul className="flex gap-10">
        {Links.map((items) => (
          <div key={items.id}>
            <li className="flex gap-1 items-center">
              <i className={`${items.icon} text-white`}></i>
              <Link
                href={items.link}
                className={`text-white uppercase text-sm font-medium`}
              >
                {items.name}
              </Link>
            </li>
          </div>
        ))}
      </ul>

      <div>
        <button className="bg-white font-medium text-black py-2 px-8 rounded-full text-sm cursor-pointer">
          Free Download
        </button>
      </div>
    </nav>
  );
}
