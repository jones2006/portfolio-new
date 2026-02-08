import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-black px-6 gap-2">
      <h1 className="lg:text-8xl font-bold mb-4 text-4xl">Error-404❌</h1>

      <p className="lg:text-2xl text-lg mb-6">Sorry mapla 😅 this page doesn’t exist.</p>

      <Link
        href="/"
        className="bg-[#F2E961] border-b-4 border-r-2 border-black px-8 py-3 rounded-full font-bold"
      >
        Go Home 😎
      </Link>
    </div>
  );
}
