import ChakraImage from "@/public/chakra.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mt-10 flex gap-8">
      <div className="shadow shadow-gray-200 flex w-[60%] justify-between p-4 rounded-2xl gap-4 relative">
        <div className="">
          <p className="text-gray-500 font-medium 2xl:text-sm text-[12px]">
            Builts by developers
          </p>
          <h5 className="text-gray-700 font-semibold mb-4 text-xl">
            Purity UI Dashboard
          </h5>
          <p className="text-gray-500 text-[0.8rem] font-light">
            From colors, cards, typography to complex elements, <br /> you will
            find the full documentation.
          </p>
          <div className="absolute bottom-4">
            <button className="cursor-pointer hover:bg-gray-300 hover:px-4 hover:py-3 hover:rounded-2xl transition-all duration-300 text-gray-700 font-medium text-sm">
              Read More <i className="ri-arrow-right-long-line text-sm"></i>
            </button>
          </div>
        </div>

        <div className="">
          <Image src={ChakraImage} alt="Chakra" className="rounded-2xl" />
        </div>
      </div>

      <div className="shadow shadow-gray-200 p-4 w-[40%] h-72 rounded-2xl">
        <div className="hero-card rounded-2xl h-full relative text-white bg-center bg-no-repeat bg-cover p-4">
          <div className="bg-linear-to-r from-gray-700/70 rounded-2xl to-gray-600/70 absolute inset-0"></div>
          <div className="relative">
            <h5 className="text-xl font-medium mb-2">Work with Rockets</h5>
            <p className="mb-30 text-[0.8rem] font-light">
              Wealth creation is an evolutionarily recent positive-sum game.{" "}
              <br /> It is all about who take the opportunity first.
            </p>
          </div>
          <div className="absolute bottom-2">
            <button className="cursor-pointer">
              Read More <i className="ri-arrow-right-long-line text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
