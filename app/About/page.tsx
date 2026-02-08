import Navbar from "@/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <section className="w-full flex items-center justify-center pt-28">
        <Image width={520} height={520} src="/icons/under.svg" alt="no image" className="mt-12 w-80 h-80 lg:w-96 lg:h-96"/>
      </section>
    </div>
  );
};

export default About;
