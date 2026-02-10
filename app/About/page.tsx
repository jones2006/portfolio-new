import Navbar from "@/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      {/* hero section */}
      <section className="w-full flex flex-col items-center justify-center gap-8 pb-5 pt-28">
        <div className="w-[90%]  border-[6px] border-black bg-[#F2C65E] rounded-[3rem] flex flex-col gap-1 justify-center items-center pb-6 lg">
          <Image
            width={130}
            height={130}
            src="/icons/about.png"
            alt="no image"
            className="pt-6 lg:w-64 lg:h-28 lg:mt-3 md:w-52 md:h-24"
          />
          <p className="space font-medium text-black text-base text-center px-2 py-4 lg:text-3xl lg:pt-6 md:text-2xl">
            “<span className="text-[#FD714F]">DESIGNER</span> BY THINKING,
            <span className="text-[#5F4FE6]">DEVELOPER</span> BY PRACTICE”
          </p>
          {/* profile */}
          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row-reverse">
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
            <div className="lg:flex-col lg:w-[50%] flex flex-col gap-3 items-center justify-center">
              <div className="bg-[#DECDFE] p-2 border-black w-[96%] border-4 border-b-8 rounded-2xl flex flex-col items-center justify-center text-black lg:w-[80%] lg:items-start lg:border-b-[12px] lg:gap-2 lg:h-48 md:items-start ">
                <p className="text-left space font-bold text-black text-[0.85rem] px-2 py-2 lg:text-2xl lg:px-10 md:text-2xl md:px-10 md:py-6">
                  Hi, I’m Jones — a{" "}
                  <span className="text-[#5F4FE6]">UI/UX Designer</span> and{" "}
                  {""}
                  <span className="text-[#F14E1E]">App Developer</span>
                  {""} who loves building bold, functional, and user-focused
                  digital products.
                </p>
              </div>

              <div className="bg-[#23A095] p-2 border-black w-[96%] border-4 border-b-8 rounded-2xl flex flex-col items-center justify-center text-black lg:w-[80%] lg:items-start lg:border-b-[12px] lg:gap-2 lg:h-48 md:items-start">
                <p className="text-left space font-bold text-black text-sm px-2 py-2 lg:text-2xl lg:px-10 md:text-2xl md:px-10 md:py-6">
                  I enjoy turning ideas into real, usable interfaces by
                  combining strong design thinking with clean, scalable code.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second section  */}
        <div className="w-[90%]  border-[6px] border-black bg-[#DECDFE] rounded-[3rem] flex flex-col gap-5 justify-center items-center pt-8 pb-10 lg:flex-row md:gap-8 lg:gap-0">
          <div className="flex flex-col w-[95%] lg:w-[50%] items-center justify-center gap-3 md:gap-6 lg:items-start lg:px-4 lg:ml-8 lg:mt-4 lg:gap-5">
            <span className="space font-bold text-black text-2xl md:text-4xl md:mt-2">
              WHAT I DO 😎
            </span>
            {/* content */}
            <p className="text-black text-sm py-2 text-center w-[97%] bg-[#23A095] border-2 border-black border-b-4 rounded-lg space font-bold md:text-2xl lg:w-[90%]">
              • Design clean and bold user interfaces
            </p>
            <p className="text-black text-sm w-[97%] text-center py-2 bg-[#F2E961] border-2 border-black border-b-4 rounded-lg space font-bold md:text-2xl lg:w-[90%]">
              • Create meaningful user experiences
            </p>
            <p className="text-black text-sm w-[97%] text-center py-2 bg-[#FD714F] border-2 border-black border-b-4 rounded-lg space font-bold md:text-2xl lg:w-[90%]">
              • Develop web and mobile applications
            </p>
            <p className="text-black text-sm w-[97%] text-center py-2 bg-[#8FA9EB] border-2 border-black border-b-4 rounded-lg space font-bold md:text-2xl lg:w-[90%]">
              • Convert designs into real products
            </p>
          </div>

          <div className="flex flex-col w-[95%] lg:w-[50%] items-center justify-center gap-3 md:gap-6 lg:items-start lg:mt-6">
            <span className="space font-bold text-black text-2xl md:text-4xl lg:text-4xl">
              MY APPROACH🥇
            </span>
            <p className="text-black text-sm py-5 px-4 bg-[#F2E961] border-2 border-black border-b-4 rounded-lg space font-bold md:text-2xl md:px-6 lg:text-xl lg:w-[90%]">
              I believe good design is not just about how it looks, but how it
              works. I focus on clarity, usability, and consistency in every
              project.
            </p>
            <p className="text-black text-sm py-5 px-4 bg-[#8FA9EB] border-2 border-black border-b-4 rounded-lg space font-bold md:text-2xl md:px-6 lg:text-xl lg:w-[90%]">
              As a developer, I enjoy building things that are not just visually
              appealing, but also efficient, maintainable, and scalable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
