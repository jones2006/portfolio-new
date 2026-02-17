"use client";
import { useState } from "react";
import Image from "next/image";

export default function UI() {
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      id: 1,
      img: "/projects-ui/kiosk ui.png",
      border: "#F2E961",
      url: "https://www.figma.com/community/file/1497969269675579774/kiosk-ui-ux-case-study",
    },
    {
      id: 2,
      img: "/projects-ui/women app ui.png",
      border: "#F92A2A",
      url: "https://www.figma.com/community/file/1496090582789127252/women-safety-app-case-study",
    },
    {
      id: 3,
      img: "/projects-ui/music app ui.png",
      border: "#E8292C",
      url: "https://www.figma.com/community/file/1574439883256356311/music-streaming-app-ui",
    },
    {
      id: 4,
      img: "/projects-ui/drone ui.png",
      border: "#3269FF",
      url: "https://www.figma.com/community/file/1515989669455988517/drone-websiteui-design",
    },
    {
      id: 5,
      img: "/projects-ui/love flame ui.png",
      border: "#FF4787",
      url: "https://www.figma.com/community/file/1523330784965191772/flames-app",
    },
    {
      id: 6,
      img: "/projects-ui/notes app ui.png",
      border: "#FFFFFF",
      url: "https://www.figma.com/community/file/1533804652686700707/notes-app",
    },
    {
      id: 7,
      img: "/projects-ui/daily planner ui.png",
      border: "#3269FF",
      url: "https://www.figma.com/community/file/1546047848577768114/daily-planner-app",
    },
    {
      id: 8,
      img: "/projects-ui/travel ui.png",
      border: "#FA7436",
      url: "https://www.figma.com/community/file/1497893158448604474/travel-website-landing-page-ui-ux-case-study-and-design",
    },
    {
      id: 9,
      img: "/projects-ui/tvk app ui.png",
      border: "#F6CA36",
      url: "https://www.figma.com/community/file/1560913926321757212/my-tvk-app-redesign",
    },
    {
      id: 10,
      img: "/projects-ui/movie app ui.png",
      border: "#7F28C8",
      url: "https://www.figma.com/community/file/1467196040256448930/show-buddy",
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
                style={{ borderColor: project.border }}
                className="rounded-lg border-l-4 border-b-4"
              />
            </a>
          </div>
        ))}

        {visibleCount < projects.length && (
          <button
            onClick={() => setVisibleCount(projects.length)}
            className="min-w-32 h-32 rounded-full bg-[#F2E961] border-l-4 border-t-4 border-black text-black font-medium mt-4 space"
          >
            See More →
          </button>
        )}
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-20">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="w-full">
            <a href={project.url} target="_blank">
              <Image
                width={350}
                height={250}
                src={project.img}
                alt="project"
                style={{ borderColor: project.border }}
                className="rounded-lg  object-cover border-l-4 border-b-4 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
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
            className="w-40 h-12 rounded-full bg-[#F2E961] border-l-4 border-t-4 border-black text-black space font-medium text-lg hover:scale-105 transition"
          >
            See More →
          </button>
        </div>
      )}
    </div>
  );
}
