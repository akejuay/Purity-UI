import Image from "next/image";
import EstherIcon from "@/public/estherIcon.png";
import { Box, File, Files, Pen, Pencil, Wrench } from "lucide-react";

export default function NameTag() {
  return (
    <div className="bg-white/80 p-4 rounded-2xl flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image src={EstherIcon} alt="Esthera Jackson" />
          <div className="bg-white absolute bottom-0 right-0 rounded-sm p-2">
            <Pencil className="h-3 w-3 text-teal-300 rounded-2xl text-base" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Esthera Jackson
          </h3>
          <p className="text-gray-400 font-medium text-sm">
            esthera@simmple.com
          </p>
        </div>
      </div>

      <div className="gap-6 mr-6 flex">
        <div className="flex items-center gap-2 bg-white px-6 shadow-xl py-3 rounded-2xl">
          <Box className="w-4 h-4 text-base text-gray-700" />
          <p className="uppercase font-semibold text-gray-700 text-sm">
            Overview
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Files className="w-4 h-4 text-base text-gray-700" />
          <p className="text-gray-700 text-sm uppercase font-semibold">Teams</p>
        </div>

        <div className="flex items-center gap-1">
          <Wrench className="w-4 h-4 text-base text-gray-700" />
          <p className="text-gray-700 text-sm uppercase font-semibold">
            projects
          </p>
        </div>
      </div>
    </div>
  );
}
