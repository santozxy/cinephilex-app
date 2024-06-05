import { Film, Home, Search, Settings, Tv } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="p-2 flex items-center justify-between w-full max-sm:flex-col px-4 h-16 max-sm:h-28 shadow-xl  sticky top-0 z-[99999]">
      <h1 className="lg:text-3xl md:text-2xl max-sm:text-2xl text-primary font-medium">
        CinephileX
      </h1>
      <nav className="flex gap-8 justify-center items-center">
        <Link href="/" className="py-2 no-underline">
          <div className="flex items-center justify-center gap-3">
            <Home size={24} className={`text-lg text-primary`} />
            <p className={`text-lg max-[450px]:hidden`}>Home</p>
          </div>
        </Link>
      </nav>
      <nav>
        <Settings size={24} className={`text-lg text-primary`} />
      </nav>
    </div>
  );
}
