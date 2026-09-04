import Circles from "@/public/circles.png";
import Image from "next/image";
import { Pencil } from "lucide-react";

const cards = [
  {
    id: 1,
    brand: "mastercard",
    number: "7812 2139 0823 XXXX",
  },
  {
    id: 2,
    brand: "visa",
    number: "7812 2139 0823 XXXX",
  },
];

interface PaymentCardProps {
  brand: "visa" | "mastercard";
  number: string;
}

const payment = [
  {
    icon: "wallet-line",
    title: "Salary",
    paragraph: "Belong Interactive",
    price: "+$2000",
  },
  {
    icon: "paypal-line",
    title: "Paypal",
    paragraph: "Freelance Payment",
    price: "$455.00",
  },
];

export default function AtmCard() {
  return (
    <div className="shadow p-6 rounded-2xl">
      <div className="flex gap-4 w-full items-center mb-8">
        <div className="bg-linear-to-r from-[#313860] to-[#151928] relative p-6 rounded-2xl w-[55%] overflow-hidden">
          {/* <div className="w-44 h-[220px] border-2 border-gray-600 rounded-full absolute -top-30 -left-4"></div>
        <div className="w-[300px] h-[320px] border-2 border-gray-600 rounded-full absolute bottom-12 left-4"></div> */}
          <div className="flex justify-between items-center relative mb-16">
            <p className="text-2xl font-medium text-white">Purity UI</p>
            <Image src={Circles} alt="Circles" />
          </div>
          <p className="text-white font-semibold tracking-[0.2rem] text-xl mb-6 relative">
            7812 2139 0823 XXXX
          </p>
          <div className="flex gap-12 text-white relative">
            <div>
              <h5 className="text-sm font-medium">Valid THRU</h5>
              <p className="font-medium text-base">05/24</p>
            </div>
            <div>
              <h5 className="text-sm font-medium">CVV</h5>
              <p className="font-medium text-base">09X</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center w-[45%]">
          {payment.map((items) => (
            <div
              key={items.price}
              className="flex flex-col rounded-2xl items-center px-4 py-6 shadow"
            >
              <i
                className={`ri-${items.icon} rounded-xl text-white bg-teal-400 px-4 py-3 text-xl`}
              ></i>
              <p className="text-lg font-semibold mt-4 text-gray-700">
                {items.title}
              </p>
              <p className="text-sm text-gray-500 text-center font-semibold">
                {items.paragraph}
              </p>
              <div className="my-8 h-0.5 bg-gray-100 w-full" />
              <p className="font-semibold text-lg text-gray-700">
                {items.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-8">
          <h5 className="text-lg text-gray-700 font-semibold">
            Payment Method
          </h5>
          <button className="uppercase bg-linear-to-r from-[#313860] to-[#151928] hover:to-[#313860] hover:from-[#151928] px-8 text-white font-semibold py-3 rounded-2xl cursor-pointer text-sm hover:transition-all duration-700 hover:-translate-y-3">
            add a new card
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <PaymentCard brand="mastercard" number="5124 9832 4123 XXXX" />
          <PaymentCard brand="visa" number="7812 2139 0823 XXXX" />
        </div>
      </div>
    </div>
  );
}

function PaymentCard({ brand, number }: PaymentCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white py-3 px-4 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-5">
        {brand === "mastercard" ? (
          <div className="flex items-center">
            <div className="bg-[#EB001B] p-3 rounded-full"></div>
            <div className="bg-[#F79E1B] p-3 -ml-2 rounded-full"></div>
          </div>
        ) : (
          <i className="ri-visa-line text-[#4318FF] text-4xl"></i>
        )}

        <p className="text-gray-500 font-medium tracking-wide text-base">
          {number}
        </p>
      </div>

      <button className="cursor-pointer">
        <Pencil className="text-slate-700" size={18} />
      </button>
    </div>
  );
}
