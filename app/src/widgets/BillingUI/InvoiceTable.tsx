import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const invoices = [
  {
    date: "March, 01, 2020",
    serialnumber: "#MS-415646",
    price: "$180",
  },
  {
    date: "February, 10, 2021",
    serialnumber: "#RV-126749",
    price: "$250",
  },
  {
    date: "April, 05, 2020",
    serialnumber: "#FB-212562",
    price: "$560",
  },
  {
    date: "June, 25, 2019",
    serialnumber: "#QW-103578",
    price: "$120",
  },
  {
    date: "March, 01, 2019",
    serialnumber: "#AR-803481",
    price: "$300",
  },
];

export default function InvoiceTable() {
  return (
    <div className="shadow p-6 rounded-2xl">
      <div className="flex justify-between  items-center mb-6">
        <h4 className="text-2xl font-semibold text-gray-700">Invoices</h4>
        <button className="uppercase border-2 hover:border-teal-200 hover:text-teal-200 cursor-pointer text-sm border-teal-300 px-8 py-3 rounded-2xl text-teal-400 font-medium">
          view all
        </button>
      </div>

      <div className="space-y-6">
        {invoices.map((items) => (
          <div className="flex items-center justify-between" key={items.date}>
            <div>
              <h6 className="text-gray-700 font-semibold mb-2 text-base">
                {items.date}
              </h6>
              <p className="text-gray-400 text-sm font-medium">
                {items.serialnumber}
              </p>
            </div>

            <div className="flex items-center gap-8">
              <p className="text-gray-400 font-semibold text-base">
                {items.price}
              </p>
              <div className="flex items-center gap-2">
                <i className="ri-file-text-fill text-base"></i>
                <p className="text-sm font-semibold">PDF</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
