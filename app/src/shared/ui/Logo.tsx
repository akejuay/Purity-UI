import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo({
  fontSize = "text-3xl",
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <div
      className={cn(
        "font-medium flex-col flex items-center justify-center w-full gap-2 h-screen z-50 bg-white",
        fontSize,
      )}
    >
      <div className="bg-white border border-teal-400 h-6 w-6 mb-2 border-b-0 rounded-full animate-spin" />
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-teal-300 to-teal-400 p-2 rounded-xl animate-pulse">
          <Image src={logo} alt="" />
        </div>
        <div className="flex gap-1">
          <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent animate-pulse">
            Purity
          </span>
          <span className="text-stone-700 dark:text-stone-300 animate-pulse">
            UI
          </span>
        </div>
      </div>
    </div>
  );
}
