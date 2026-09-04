// import Image from "next/image";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import avatar1 from "@/public/avater.jpg";
// import AddNewIcon from "@/public/addnewicon.png";
// import AddprogressIcon from "@/public/addprogressicon.png";
// import Chakralogo from "@/public/chakraicon.png";
// import FixIcon from "@/public/fixicons.png";
// import SpotifyIcon from "@/public/spotifyicon.png";
// import LinkedInIcon from "@/public/linkedinicon.png";

// const tableHead = ["Companies", "Members", "Budgets", "Completion"];

// const tableContent = [
//   {
//     id: 1,
//     companies: "Chakra Soft UI Version",
//     member: "",
//     budget: "$14,000",
//     completion: 60,
//     logo: Chakralogo,
//   },
//   {
//     id: 2,
//     companies: "Add Progress Track",
//     member: "",
//     budget: "$3,000",
//     completion: 10,
//     logo: AddprogressIcon,
//   },
//   {
//     id: 3,
//     companies: "Fix Platform Errors",
//     member: "",
//     budget: "Not set",
//     completion: 100,
//     logo: FixIcon,
//   },
//   {
//     id: 4,
//     companies: "Launch our mobile app",
//     member: "",
//     budget: "$32,000",
//     completion: 100,
//     logo: SpotifyIcon,
//   },
//   {
//     id: 5,
//     companies: "Add the New Pricing Page",
//     member: "",
//     budget: "$400",
//     completion: 25,
//     logo: AddNewIcon,
//   },
//   {
//     id: 6,
//     companies: "Redesign New Online Shop",
//     member: "",
//     budget: "$7,600",
//     completion: 40,
//     logo: LinkedInIcon,
//   },
// ];

// export default function Tables() {
//   return (
//     <section className="shadow shadow-gray-200 p-6 rounded-2xl">
//       <div className="flex items-center justify-between">
//         <div>
//           <h5 className="text-2xl font-medium mb-2 text-gray-700">Projects</h5>
//           <p className="text-green-500 text-xl mb-6">
//             <i className="ri-checkbox-circle-line"></i>{" "}
//             <span className="text-gray-500 text-base font-medium">
//               30 done this month
//             </span>
//           </p>
//         </div>
//         <div>
//           <button className="cursor-pointer">
//             <i className="ri-more-2-fill text-xl text-gray-400"></i>
//           </button>
//         </div>
//       </div>
//       <Table>
//         <TableHeader className="">
//           <TableRow className="border-b border-gray-200 py-3">
//             {tableHead.map((items) => (
//               <TableHead className="text-gray-500 font-medium uppercase text-base">
//                 {items}
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>

//         <TableBody className="py-8 border-b border-gray-200">
//           <TableRow>
//             {/* Company */}
//             <TableCell>
//               <div className="flex items-center gap-4 ">
//                 <div className="flex items-center gap-7">
//                   <Image
//                     src={Chakralogo}
//                     alt="Chakralogo"
//                     width={30}
//                     height={30}
//                   />
//                   <p className="text-lg text-gray-700 font-medium">UI Design</p>
//                 </div>
//               </div>
//             </TableCell>

//             {/* Members */}
//             <TableCell>
//               <div className="flex -space-x-2">
//                 <Image
//                   src={avatar1}
//                   alt=""
//                   width={32}
//                   height={32}
//                   className="rounded-full border-2 border-[#1A202C]"
//                 />
//                 <Image
//                   src={avatar1}
//                   alt=""
//                   width={32}
//                   height={32}
//                   className="rounded-full border-2 border-[#1A202C]"
//                 />
//                 <Image
//                   src={avatar1}
//                   alt=""
//                   width={32}
//                   height={32}
//                   className="rounded-full border-2 border-[#1A202C]"
//                 />
//               </div>
//             </TableCell>

//             {/* Budget */}
//             <TableCell>$14,000</TableCell>

//             {/* Completion */}
//             <TableCell>60%</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </section>
//   );
// }

import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import avatar1 from "@/public/avatar1.png";
import avatar2 from "@/public/avatar2.png";
import avatar3 from "@/public/avatar3.png";
import avatar4 from "@/public/avatar4.png";
import avatar5 from "@/public/avatar5.png";

import AddNewIcon from "@/public/addnewicon.png";
import AddprogressIcon from "@/public/addprogressicon.png";
import Chakralogo from "@/public/chakraicon.png";
import FixIcon from "@/public/fixicons.png";
import SpotifyIcon from "@/public/spotifyicon.png";
import LinkedInIcon from "@/public/linkedinicon.png";

const tableHead = ["Companies", "Members", "Budget", "Completion"];
const tableContent = [
  {
    id: 1,
    company: "Chakra Soft UI Version",
    budget: "$14,000",
    completion: 60,
    logo: Chakralogo,
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
  },
  {
    id: 2,
    company: "Add Progress Track",
    budget: "$3,000",
    completion: 10,
    logo: AddprogressIcon,
    members: [avatar1, avatar2],
  },
  {
    id: 3,
    company: "Fix Platform Errors",
    budget: "Not set",
    completion: 100,
    logo: FixIcon,
    members: [avatar1, avatar2, avatar3, avatar4],
  },
  {
    id: 4,
    company: "Launch our Mobile App",
    budget: "$32,000",
    completion: 100,
    logo: SpotifyIcon,
    members: [avatar1],
  },
  {
    id: 5,
    company: "Add the New Pricing Page",
    budget: "$400",
    completion: 25,
    logo: AddNewIcon,
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
  },
  {
    id: 6,
    company: "Redesign New Online Shop",
    budget: "$7,600",
    completion: 40,
    logo: LinkedInIcon,
    members: [avatar1, avatar2, avatar3],
  },
];

export default function Tables() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-start justify-between">
        <div>
          <h5 className="text-2xl font-medium text-gray-700">Projects</h5>

          <p className="mt-2 flex items-center gap-2 text-green-500">
            <i className="ri-checkbox-circle-fill" />

            <span className="text-sm font-medium text-gray-500">
              30 done this month
            </span>
          </p>
        </div>

        <button>
          <i className="ri-more-2-fill text-lg text-gray-400 cursor-pointer" />
        </button>
      </div>

      {/* Table */}

      <Table>
        <TableHeader>
          <TableRow>
            {tableHead.map((head) => (
              <TableHead
                key={head}
                className="uppercase text-gray-400 text-base font-thin"
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableContent.map((project) => (
            <TableRow key={project.id}>
              {/* Company */}

              <TableCell className="py-5">
                <div className="flex items-center gap-2">
                  <Image
                    src={project.logo}
                    alt={project.company}
                    width={20}
                    height={20}
                  />

                  <span className="font-medium text-lg text-gray-700">
                    {project.company}
                  </span>
                </div>
              </TableCell>

              {/* Members */}

              <TableCell>
                <div className="flex -space-x-3">
                  {project.members.map((member, index) => (
                    <Avatar
                      key={index}
                      className="h-8 w-8 border-2 border-white"
                    >
                      <AvatarImage src={member.src} />
                      <AvatarFallback>UU</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </TableCell>

              {/* Budget */}

              <TableCell className="font-semibold text-gray-700 text-base">
                {project.budget}
              </TableCell>

              {/* Completion */}

              <TableCell>
                <div className="">
                  <span className="text-base mb-2 font-medium text-teal-300">
                    {project.completion}%
                  </span>

                  <div className="h-0.5 w-[80%] overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-teal-300"
                      style={{
                        width: `${project.completion}%`,
                      }}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
