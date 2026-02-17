"use client";
import { useState } from "react";
import Image from "next/image";

export default function UI() {
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    { id: 1, img: "/projects-ui/kiosk ui.png", border: "#F2E961" },
    { id: 2, img: "/projects-ui/women app ui.png", border: "#F92A2A" },
    { id: 3, img: "/projects-ui/music app ui.png", border: "#E8292C" },
    { id: 4, img: "/projects-ui/drone ui.png", border: "#3269FF" },
    { id: 5, img: "/projects-ui/love flame ui.png", border: "#FF4787" },
    { id: 6, img: "/projects-ui/notes app ui.png", border: "#FFFFFF" },
    { id: 7, img: "/projects-ui/daily planner ui.png", border: "#3269FF" },
    { id: 8, img: "/projects-ui/travel ui.png", border: "#FA7436" },
    { id: 9, img: "/projects-ui/tvk app ui.png", border: "#F6CA36" },
    { id: 10, img: "/projects-ui/movie app ui.png", border: "#7F28C8" },
  ];

  return (
    <div className="w-full py-4">
      {/* MOBILE VIEW */}
      <div className="flex gap-4 overflow-x-auto px-6 md:hidden scrollbar-hide">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="min-w-[256px] h-44">
            <Image
              width={256}
              height={176}
              src={project.img}
              alt="project"
              style={{ borderColor: project.border }}
              className="rounded-lg border-l-4 border-b-4"
            />
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
            <a>
              <Image
                width={350}
                height={250}
                src={project.img}
                alt="project"
                style={{ borderColor: project.border }}
                className="rounded-lg  object-cover border-l-4 border-b-4"
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
