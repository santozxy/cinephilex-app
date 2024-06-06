import { Film, Home, LucideUsers, Search, Settings, Tv } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "./search-bar";
import { Suspense } from "react";
import Image from "next/image";
import { ThemeSwitcher } from "./switcher-theme";

export default function Header() {
  return (
    <div className="p-3 grid grid-cols-3 w-full max-sm:place-items-center bg-zinc-50 dark:bg-zinc-900 max-sm:grid-cols-1 px-6 h-20 max-sm:h-32 shadow-xl sticky top-0 z-[99999]">
      <nav className="flex items-center">
        <h1 className="text-2xl max-sm:hidden leading-relaxed text-primary font-semibold">
          CinephileX
        </h1>
      
      </nav>
      <nav className="flex gap-8 justify-center items-center ">
      <Link href="/" className="py-2 no-underline hover:underline sm:hidden">
          <div className="flex items-center justify-center gap-3">
          <Image className="" src="/logo.png" alt="CinephileX" width={24} height={24} />
          </div>
        </Link>
     
        <Link href="/" className="py-2 no-underline hover:underline">
          <div className="flex items-center justify-center gap-3">
            <Home size={24} className={`text-lg text-primary`} />
            <p className={`text-lg max-[450px]:hidden`}>Home</p>
          </div>
        </Link>

        <Link href="/movies" className="py-2 no-underline hover:underline">
          <div className="flex items-center justify-center gap-3">
            <Film size={24} className={`text-lg text-primary`} />
            <p className={`text-lg max-[450px]:hidden`}>Movies</p>
          </div>
        </Link>

        <Link href="/series" className="py-2 no-underline hover:underline">
          <div className="flex items-center justify-center gap-3">
            <Tv size={24} className={`text-lg text-primary`} />
            <p className={`text-lg max-[450px]:hidden`}>Series</p>
          </div>
        </Link>
        <Link href="/persons" className="py-2 no-underline hover:underline">
          <div className="flex items-center justify-center gap-3">
            <LucideUsers size={24} className={`text-lg text-primary`} />
            <p className={`text-lg max-[450px]:hidden`}>Persons</p>
          </div>
        </Link>
      </nav>
      <nav className="flex gap-4 items-center justify-end">
        <Suspense>
          <SearchBar />
        </Suspense>
        <Suspense>
          <ThemeSwitcher />
        </Suspense>
      </nav>
    </div>
  );
}
