import React from "react";

const Whattodo = () => {
  return (
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
        <p className="text-black text-sm py-5 px-4 bg-[#F2E961] border-2 border-black border-b-[6px] rounded-lg space font-bold md:text-2xl md:px-6 lg:text-xl lg:w-[90%]">
          I believe good design is not just about how it looks, but how it
          works. I focus on clarity, usability, and consistency in every
          project.
        </p>
        <p className="text-black text-sm py-5 px-4 bg-[#8FA9EB] border-2 border-black border-b-[6px] rounded-lg space font-bold md:text-2xl md:px-6 lg:text-xl lg:w-[90%]">
          As a developer, I enjoy building things that are not just visually
          appealing, but also efficient, maintainable, and scalable.
        </p>
      </div>
    </div>
  );
};

export default Whattodo;
