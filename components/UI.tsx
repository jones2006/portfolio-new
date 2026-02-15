"use client";
import { useState } from "react";
import Image from "next/image";

export default function UI() {
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    { id: 1, img: "/icons/kiosk.png" },
    { id: 2, img: "/icons/kiosk.png" },
    { id: 3, img: "/icons/kiosk.png" },
    { id: 4, img: "/icons/kiosk.png" },
    { id: 5, img: "/icons/kiosk.png" },
    { id: 6, img: "/icons/kiosk.png" },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div className="flex gap-4 w-max px-6">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="w-64 h-44">
            <Image width={256} height={176} src={project.img} alt="project" />
          </div>
        ))}

        {visibleCount < projects.length && (
          <button
            onClick={() => setVisibleCount(projects.length)}
            className="w-40 h-44 bg-black text-white rounded-xl"
          >
            See More →
          </button>
        )}
      </div>
    </div>
  );
}
