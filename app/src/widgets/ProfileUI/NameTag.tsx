// import Image from "next/image";
// import EstherIcon from "@/public/estherIcon.png";
// import { Box, File, Files, Pen, Pencil, Wrench } from "lucide-react";

// export default function NameTag() {
//   return (
//     <div className="bg-white/80 p-4 rounded-2xl flex justify-between items-center shadow-sm">
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <Image src={EstherIcon} alt="Esthera Jackson" />
//           <div className="bg-white absolute bottom-0 right-0 rounded-sm p-2">
//             <Pencil className="h-3 w-3 text-teal-300 rounded-2xl text-base" />
//           </div>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-700">
//             Esthera Jackson
//           </h3>
//           <p className="text-gray-400 font-medium text-sm">
//             esthera@simmple.com
//           </p>
//         </div>
//       </div>

//       <div className="gap-6 mr-6 flex">
//         <div className="flex items-center gap-2 bg-white px-6 shadow-xl py-3 rounded-2xl">
//           <Box className="w-4 h-4 text-base text-gray-700" />
//           <p className="uppercase font-semibold text-gray-700 text-sm">
//             Overview
//           </p>
//         </div>

//         <div className="flex items-center gap-1">
//           <Files className="w-4 h-4 text-base text-gray-700" />
//           <p className="text-gray-700 text-sm uppercase font-semibold">Teams</p>
//         </div>

//         <div className="flex items-center gap-1">
//           <Wrench className="w-4 h-4 text-base text-gray-700" />
//           <p className="text-gray-700 text-sm uppercase font-semibold">
//             projects
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch("/api/getUser");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch profile");
        }

        setUser(data.user);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>User not found.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarFallback className="rounded-lg">
          {user?.name
            ?.split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="mt-8 space-y-4">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="text-lg font-medium">{user.name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-lg font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Account created</p>
          <p className="text-lg font-medium">
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
