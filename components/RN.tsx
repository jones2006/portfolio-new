"use client";
import { useState } from "react";
import Image from "next/image";
import { url } from "inspector";

export default function RN() {
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      id: 1,
      img: "/project-rn/love flame app.png",
      border: "#1E1E1E",
      url: "https://github.com/jones2006/Flames-app-mobile-app-",
    },
    {
      id: 2,
      img: "/project-rn/weather app.png",
      border: "#A459FF",
      url: "https://github.com/jones2006/weather-app",
    },
    {
      id: 3,
      img: "/project-rn/multi-tools app.png",
      border: "#FFFFFF",
      url: "https://github.com/jones2006/Multi-tool_App-",
    },
    {
      id: 4,
      img: "/project-rn/signup page.png",
      border: "#1E1E1E",
      url: "https://github.com/jones2006/login-signup-page-mobile-App-",
    },
    {
      id: 5,
      img: "/project-rn/credit app.png",
      border: "#455A64",
      url: "https://github.com/jones2006/Credit-management-app",
    },
    {
      id: 6,
      img: "/project-rn/Ai app.png",
      border: "#3269FF",
      url: "https://github.com/jones2006/Ai-app",
    },
    {
      id: 7,
      img: "/project-rn/daily planner app.png",
      border: "#A459FF",
      url: "https://github.com/jones2006/Daily-planner-app",
    },
    {
      id: 8,
      img: "/project-rn/movie app.png",
      border: "#FFFFFF",
      url: "https://github.com/jones2006/show-buddy--",
    },
  ];

  return (
    <div className="w-full py-4">
      {/* MOBILE VIEW */}
      <div className="flex gap-4 overflow-x-auto px-6 md:hidden scrollbar-hide">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="min-w-[256px] h-44">
            <a href={project.url} target="_blank">
              <Image
                width={256}
                height={176}
                src={project.img}
                alt="project"
                className="rounded-lg border-l-4 border-b-4 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
                style={{ borderColor: project.border }}
              />
            </a>
          </div>
        ))}

        {visibleCount < projects.length && (
          <button
            onClick={() => setVisibleCount(projects.length)}
            className="min-w-32 h-32 rounded-full bg-[#F2E961] border-l-4 border-t-4 border-black text-black space font-medium mt-5"
          >
            See More →
          </button>
        )}
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-20">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="w-full ">
            <a href={project.url} target="_blank">
              <Image
                width={350}
                height={250}
                src={project.img}
                alt="project"
                style={{ borderColor: project.border }}
                className="rounded-xl  object-cover border-l-4 border-b-4 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        ))}
      </div>

      {/* DESKTOP SEE MORE BUTTON */}
      {visibleCount < projects.length && (
        <div className="hidden md:flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount(projects.length)}
            className="w-40 h-12 rounded-full bg-[#F2E961] border-l-4 border-t-4 border-black text-black space font-medium text-base hover:scale-105 transition"
          >
            See More →
          </button>
        </div>
      )}
    </div>
  );
}
