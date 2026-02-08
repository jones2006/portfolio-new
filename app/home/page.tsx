import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center gap-4 pb-4">
        <div className=" w-[90%] border-[6px] border-black bg-[#DECDFE] rounded-[2.5rem] lg:w-[94%] flex flex-col items-center justify-around pb-8 gap-5">
          <div className="relative ">
            <Image
              width={520}
              height={520}
              src="/icons/profile.png"
              alt="no image"
              className="mr-4"
            />
            <Image
              width={100}
              height={100}
              src="/icons/circle.png"
              alt="no image"
              className="absolute right-5 bottom-0 mt-4 animate-spin [animation-duration:8s] z-0 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-row gap-2 items-center pl-3">
              <Image width={220} height={220} alt="" src="/icons/text.svg" />
              <span className="text-2xl">😎</span>
            </div>

            <span className="text-black text-base space inline-block px-4 w-[94%] text-center">
              UI/UX DESIGNER & APP DEVELOPER I DESIGN BOLD INTERFACES & BUILD
              REAL PRODUCTS
            </span>
            <button className="bg-[#F2E961] border-b-4 border-r-2 border-black w-36 h-12 rounded-2xl">
              <Link
                href="/Contact"
                className="ibm font-bold text-sm text-black"
              >
                SAY HELLO 👋”
              </Link>
            </button>
          </div>
        </div>
        <div className="bg-[#F2C65E] w-[90%] h-[5.5rem] border-[6px] border-black rounded-full flex flex-row items-center justify-between px-6">
          <Image
            width={120}
            height={120}
            src="/icons/About.png"
            alt="no image"
          />
          <button className="rounded-full w-14 h-14 bg-[#F2E961] border-4 border-black flex items-center justify-center">
            <ArrowUpRight strokeWidth={2.5} color="black" />
          </button>
        </div>
      </section>
    </div>
  );
};
export default Home;
