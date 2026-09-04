import Icon1 from "@/public/notificationicon.png";
import Icon2 from "@/public/Icon (10).png";
import Icon3 from "@/public/Icon (8).png";
import Icon4 from "@/public/Icon (9).png";
import Icon5 from "@/public/dropboxicon.png";
import Icon6 from "@/public/chakraicon.png";
import Image from "next/image";

const timeline = [
  {
    id: 1,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    image: Icon1,
  },
  {
    id: 2,
    title: "New order #1832412",
    date: "21 DEC 11 PM",
    image: Icon2,
  },
  {
    id: 3,
    title: "Server Payments for April",
    date: "21 DEC 9:34 PM",
    image: Icon3,
  },
  {
    id: 4,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    image: Icon4,
  },
  {
    id: 5,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    image: Icon5,
  },
  {
    id: 6,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
    image: Icon6,
  },
];

export default function OrdersOverview() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h5 className="text-2xl font-medium text-gray-700">
            Orders Overview
          </h5>

          <p className="mt-2 flex items-center gap-2 font-semibold text-base text-green-600">
            +30%
            <span className="text-sm font-medium text-gray-500">
              done this month
            </span>
          </p>
        </div>
      </div>

      <div className="space-y-1">
        {timeline.map((item, index) => (
          <div key={item.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="flex h-5 w-5 items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={25}
                  height={25}
                />
              </div>

              {index !== timeline.length - 1 && (
                <div className="mt-2 h-8 w-0.5 bg-gray-300" />
              )}
            </div>

            <div className="pb-5">
              <h5 className="text-base font-medium text-gray-700">
                {item.title}
              </h5>

              <p className="mt-1 text-sm font-medium uppercase text-gray-400">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
