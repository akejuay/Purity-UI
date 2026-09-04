import React from "react";

const newerTransaction = [
  {
    icon: "arrow-down-line",
    name: "Netflix",
    date: "27 March 2020, at 12:30 PM",
    price: "-$2500",
    color: "#fb2c36",
  },
  {
    icon: "arrow-up-line",
    name: "Apple",
    date: "27 March 2020, at 12:30 PM",
    price: "+$2500",
    color: "#00c950",
  },
];

const olderTransactions = [
  {
    icon: "arrow-up-line",
    name: "Stripe",
    date: "26 March 2020, at 13:45 PM",
    price: "+$800",
    color: "#00c950",
  },
  {
    icon: "arrow-up-line",
    name: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    price: "+$1700",
    color: "#00c950",
  },
  {
    icon: "error-warning-line",
    name: "Webflow",
    date: "26 March 2020, at 05:00 AM",
    price: "Pending",
    color: "#6a7282",
  },
  {
    icon: "arrow-up-line",
    name: "Apple",
    date: "25 March 2020, at 16:30 PM",
    price: "-$987",
    color: "#fb2c36",
  },
];

export default function Transactions() {
  return (
    <aside>
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl text-gray-700 font-semibold">
          Your Transactions
        </h4>

        <p className="text-gray-400 font-semibold text-base">
          <i className="ri-calendar-2-line" /> 23 - 30 March 2020
        </p>
      </div>

      <p className="text-base text-gray-400 font-medium mb-6">Newest</p>

      <div className="space-y-8">
        {newerTransaction.map((items) => (
          <div className="flex justify-between items-center" key={items.name}>
            <div className="flex items-center gap-2">
              <div>
                <i
                  className={`ri-${items.icon} text-base border p-3 rounded-full`}
                  style={{
                    color: `${items.color}`,
                    borderColor: `${items.color}`,
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-700">
                  {items.name}
                </h4>
                <p className="text-gray-400 font-semibold text-sm">
                  {items.date}
                </p>
              </div>
            </div>

            <p
              className={`text-base font-semibold`}
              style={{ color: `${items.color}` }}
            >
              {items.price}
            </p>
          </div>
        ))}
      </div>

      <p className="text-base text-gray-400 font-medium my-6">Yesterday</p>

      <div className="space-y-8">
        {olderTransactions.map((items) => (
          <div className="flex justify-between items-center" key={items.name}>
            <div className="flex items-center gap-2">
              <div>
                <i
                  className={`ri-${items.icon} text-base border p-3 rounded-full`}
                  style={{
                    color: `${items.color}`,
                    borderColor: `${items.color}`,
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-700">
                  {items.name}
                </h4>
                <p className="text-gray-400 font-semibold text-sm">
                  {items.date}
                </p>
              </div>
            </div>

            <p
              className={`text-base font-semibold`}
              style={{ color: `${items.color}` }}
            >
              {items.price}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
