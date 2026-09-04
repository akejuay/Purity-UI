import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Author1 from "@/public/author1.png";
import Author2 from "@/public/author2.png";
import Author3 from "@/public/author3.png";
import Author4 from "@/public/author4.png";
import Author5 from "@/public/author5.png";
import Author6 from "@/public/author6.png";
import Image from "next/image";
import Tables from "../dashboardUi/Tables";
import Footer from "@/components/Layouts/Footer";

const authorTableHead = ["Author", "function", "status", "employed"];
const authorTableContent = [
  {
    id: 1,
    avater: Author1,
    name: "Esthera Jackson",
    email: "esthera@simmple.com",
    function: "Manager",
    type: "Organisation",
    status: "Online",
    bgColor: "#48BB78",
    employed: "14/06/21",
  },
  {
    id: 2,
    avater: Author2,
    name: "Alexa Liras",
    email: "alexa@simmple.com",
    function: "Programmer",
    type: "Developer",
    status: "Offline",
    bgColor: "#d1d5dc",
    employed: "14/06/21",
  },
  {
    id: 3,
    avater: Author3,
    name: "Laurent Michael",
    email: "laurent@simmple.com",
    function: "Executive",
    type: "Projects",
    status: "Online",
    bgColor: "#48BB78",
    employed: "14/06/21",
  },
  {
    id: 4,
    avater: Author4,
    name: "Freduardo Hill",
    email: "freduardo@simmple.com",
    function: "Manager",
    type: "Organisation",
    status: "Online",
    bgColor: "#48BB78",
    employed: "14/06/21",
  },
  {
    id: 5,
    avater: Author5,
    name: "Daniel Thomas",
    email: "daniel@simmple.com",
    function: "Programmer",
    type: "Developer",
    status: "Offline",
    bgColor: "#d1d5dc",
    employed: "14/06/21",
  },
  {
    id: 6,
    avater: Author6,
    name: "Mark Wilson",
    email: "mark@simmple.com",
    function: "Designer",
    type: "UI/UX Design",
    status: "Offline",
    bgColor: "#d1d5dc",
    employed: "14/06/21",
  },
];

export default function AuthorTable() {
  return (
    <div>
      <div className="rounded-2xl mb-12 bg-white p-6 shadow-sm">
        <h5 className="text-2xl font-medium text-gray-700 mb-7">
          Authors Table
        </h5>

        <AuthorsMainTable />
      </div>
      <div className="mb-8">
        <Tables />
      </div>
      <Footer />
    </div>
  );
}

function AuthorsMainTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {authorTableHead.map((head) => (
            <TableHead
              key={head}
              className="uppercase text-gray-400 font-medium text-base"
            >
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {authorTableContent.map((items) => (
          <TableRow key={items.id}>
            <TableCell className="py-4">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={items.avater}
                    alt={items.name}
                    width={55}
                    height={55}
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 text-xl font-medium">
                    {items.name}
                  </h4>
                  <p className="text-gray-500 text-base">{items.email}</p>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <h5 className="text-gray-700 text-lg font-medium">
                {items.function}
              </h5>
              <p className="text-gray-500 text-base">{items.type}</p>
            </TableCell>

            <TableCell>
              <div className="w-24">
                <h6
                  className={`text-white text-lg py-2 font-medium text-center rounded-2xl`}
                  style={{ backgroundColor: `${items.bgColor}` }}
                >
                  {items.status}
                </h6>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-base font-medium">{items.employed}</span>
            </TableCell>

            <TableCell>
              <button className="text-base font-medium text-gray-400 cursor-pointer hover:underline transition-all duration-300">
                Edit
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
