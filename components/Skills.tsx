import React from "react";
import { Figma, Linkedin } from "react-feather";

const Skills = () => {
  return (
    <section className="bg-[#0FDA75] border-[6px] border-black w-[90%]  rounded-4xl flex flex-col items-center pt-7 pb-8">
      <span className="space font-bold text-black text-xl">
        TOOLS & TECHNOLOGIES
      </span>

      <div className="flex flex-col gap-6 pt-6 lg:flex-row">
        {/* Design */}
        <div className="flex flex-col gap-6 items-center">
          <span className="space font-bold text-xl text-black bg-[#8FA9EB] border-2 border-b-4 border-black w-32 h-12  flex items-center justify-center rounded-xl">
            DESIGN :
          </span>
          <div className="flex flex-row gap-5">
            <div className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center">
              <Figma />
            </div>
            <div className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center">
              spline
            </div>
            <div className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center">
              photoshop
            </div>
          </div>
        </div>

        {/* Front-end  */}

        <div className="flex flex-col gap-6 items-center">
          <span className="space font-bold text-xl text-black bg-[#23A095] border-2 border-b-4 border-black py-2 px-6 rounded-xl">
            FRONT-END :
          </span>
          <div className="flex flex-row gap-6">
            <div className="w-11 h-11 rounded-full bg-[#302D40] flex items-center justify-center">
              Html
            </div>
            <div className="w-11 h-11 rounded-full bg-[#302D40] flex items-center justify-center">
              css
            </div>
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              Tailwind
            </div>
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              React
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-6 lg:flex-row">
        {/* Mobile and Backend */}
        <div className="flex flex-col gap-6 items-center">
          <span className="space font-bold text-xl text-black bg-[#FD714F] border-2 border-b-4 border-black w-32 h-12  flex items-center justify-center rounded-xl">
            MOBILE :
          </span>
          <div className="flex flex-row gap-5">
            <div className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center">
              react native
            </div>
            <div className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center">
              Expo
            </div>
          </div>
        </div>

        {/* Backend */}

        <div className="flex flex-col gap-6 items-center">
          <span className="space font-bold text-xl text-black bg-[#F2E961] border-2 border-b-4 border-black py-2 px-6 rounded-xl">
            BACK-END :
          </span>
          <div className="flex flex-row gap-6">
            <div className="w-11 h-11 rounded-full bg-[#302D40] flex items-center justify-center">
              Python
            </div>
            <div className="w-11 h-11 rounded-full bg-[#302D40] flex items-center justify-center">
              flask
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
