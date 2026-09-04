import {
  CreditCard,
  HomeIcon,
  LayoutList,
  LogIn,
  Rocket,
  UserCircle,
  UserPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AppRoute =
  | "/admin/dashboard"
  | "/admin/tables"
  | "/admin/billing"
  | "/admin/rtl"
  | "/admin/profile"
  | "/auth/signin"
  | "/auth/signup";

export interface NavItem {
  label: string;
  to: AppRoute;
  icon: LucideIcon;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: "",
    items: [
      { label: "Dashboard", to: "/admin/dashboard", icon: HomeIcon },
      { label: "Tables", to: "/admin/tables", icon: LayoutList },
      { label: "Billing", to: "/admin/billing", icon: CreditCard },
      { label: "RTL", to: "/admin/rtl", icon: Rocket },
    ],
  },
  {
    title: "Account Pages",
    items: [
      { label: "Profile", to: "/admin/profile", icon: UserCircle },
      { label: "Sign In", to: "/auth/signin", icon: LogIn },
      { label: "Sign Up", to: "/auth/signup", icon: UserPlus },
    ],
  },
];

export const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/tables": "Tables",
  "/admin/billing": "Billing",
  "/admin/rtl": "RTL",
  "/admin/profile": "Profile",
  "/auth/signin": "Sign In",
  "/auth/signup": "Sign Up",
};