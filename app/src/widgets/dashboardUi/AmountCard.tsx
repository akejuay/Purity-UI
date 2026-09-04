import React from "react";

const amounts = [
  {
    id: 1,
    title: "Today's Money",
    amount: "$53,000",
    percentage: "+55",
    icon: "wallet-3-line",
    color: "green-500",
  },
  {
    id: 2,
    title: "Today's User",
    amount: "$2,300",
    percentage: "+5",
    icon: "global-line",
    color: "green-500",
  },
  {
    id: 3,
    title: "New Clients",
    amount: "+3,072",
    percentage: "-12",
    icon: "file-text-line",
    color: "red-500",
  },
  {
    id: 4,
    title: "Total Sales",
    amount: "$173,000",
    percentage: "+8",
    icon: "shopping-cart-2-line",
    color: "green-500",
  },
];

export default function AmountCard() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {amounts.map((items) => (
        <div
          className="flex items-center justify-between bg-white/25 shadow shadow-gray-200 py-5 px-4 rounded-2xl"
          key={items.id}
        >
          <div>
            <h6 className="text-gray-500 text-[0.8rem] mb-2 2xl:text-sm font-medium">
              {items.title}
            </h6>
            <p className="text-2xl text-gray-700 font-bold">
              {items.amount}{" "}
              <span className={`text-${items.color} font-medium text-sm`}>
                {" "}
                {items.percentage}%
              </span>
            </p>
          </div>
          <div>
            <i
              className={`ri-${items.icon} text-white bg-teal-400 text-lg rounded-2xl p-4`}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}
