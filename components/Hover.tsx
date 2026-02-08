"use client";
import { usePathname } from "next/navigation";

const Hover = ({ href, label }: any) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <a
      href={href}
      className={`relative font-space px-1 cursor-pointer
        after:absolute after:left-0 after:-bottom-2
        after:h-0.5 after:w-full
        after:border-b-4 after:border
         after:border-[#DECDFE]
          after:rounded-full
        transition-all duration-300 ibm font-bold 
        ${active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}
      `}
    >
      {label}
    </a>
  );
};

export default Hover;
