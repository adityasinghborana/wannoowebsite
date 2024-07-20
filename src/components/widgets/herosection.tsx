import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";

const HeroSection = () => {
  return (
    <div className="bg-white px-20 ">
      <div className="  px-20  lg:px-8 flex flex-row justify-between">
        <div>
          <div>
            <div className="mx-auto  pt-20 sm:py-12 lg:pt-20 lg:pb-0">
              <div className="text-center">
                <div className="md:flex flex-row sm:flex-col justify-start items-start ">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl flex  flex-row text-center  justify-start">
                    One place for
                  </h1>

                  <h1 className="text-orange-400 text-[80px] pb-0 -mb-8 font-extrabold">
                    adventure
                  </h1>
                  <div className="flex flex-row items-center">
                    <h1 className=" text-xl leading-8 text-gray-600">
                      Start your bucket list today
                    </h1>
                    <SlArrowRight size={16} className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 items-center justify-center align-middle z-10">
          <div className="w-full flex flex-col justify-center md:mt-20  ">
            <div
              //  ref={floatingDivRef}
              className="   w-full align-middle items-center justify-center pl-56"
            >
              <Image src="/story2.png" alt="alt" height={250} width={250} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
