import Navbar from "@/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      {/* hero section */}
      <section className="w-full flex flex-col items-center justify-center gap-4 pb-5 pt-28">
        <div className="w-[90%]  border-[6px] border-black bg-[#F2C65E] rounded-[3rem] flex flex-col gap-1 justify-center items-center pb-6">
          <Image
            width={130}
            height={130}
            src="/icons/About.png"
            alt="no image"
            className="pt-6 lg:w-64 lg:h-28 lg:mt-3"
          />
          <p className="space font-medium text-black text-base text-center px-2 py-4 lg:text-3xl lg:pt-6">
            “<span className="text-[#FD714F]">DESIGNER</span> BY THINKING,
            <span className="text-[#5F4FE6]">DEVELOPER</span> BY PRACTICE”
          </p>
          {/* profile */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative bottom-4">
              <Image
                width={520}
                height={520}
                src="/icons/profile.png"
                alt="no image"
                className=""
              />
              <Image
                width={100}
                height={100}
                src="/icons/circle.png"
                alt="no image"
                className="absolute right-5 bottom-0 mt-4 animate-spin [animation-duration:8s] z-0 cursor-pointer"
              />
            </div>
            {/* content */}
            <div className="bg-[#DECDFE] p-2 border-black w-[96%] border-4 border-b-8 rounded-2xl flex flex-col items-center justify-center text-black lg:w-[80%] lg:items-start lg:border-b-[12px] lg:gap-2 lg:h-40 md:items-start md:p-1 md:h-32">
              <p className="text-left space font-bold text-black text-[0.85rem] px-2 py-2 lg:text-2xl lg:px-10 md:text-xl md:px-10">
                Hi, I’m Jones — a{" "}
                <span className="text-[#5F4FE6]">UI/UX Designer</span> and {""}
                <span className="text-[#F14E1E]">App Developer</span>
                {""} who loves building bold, functional, and user-focused
                digital products.
              </p>
            </div>

            <div className="bg-[#23A095] p-2 border-black w-[96%] border-4 border-b-8 rounded-2xl flex flex-col items-center justify-center text-black lg:w-[80%] lg:items-start lg:border-b-[12px] lg:gap-2 lg:h-40 md:items-start md:p-1 md:h-32">
              <p className="text-left space font-bold text-black text-sm px-2 py-2 lg:text-2xl lg:px-10 md:text-xl md:px-10">
                I enjoy turning ideas into real, usable interfaces by combining
                strong design thinking with clean, scalable code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
