"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Home, Film, Tv, LucideUsers } from "lucide-react";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className="flex gap-8 justify-center items-center ">
      <Link href="/" className={`py-2 no-underline sm:hidden `}>
        <div className="flex items-center justify-center gap-3">
          <Image
            className=""
            src="/logo.png"
            alt="CinephileX"
            width={24}
            height={24}
          />
        </div>
      </Link>

      <Link
        href="/"
        className={`py-2 no-underline hover:text-primary duration-300 ${
          path === "/" ? "text-primary" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <Home size={24} className={` text-primary`} />
          <p className={` max-[450px]:hidden`}>Início</p>
        </div>
      </Link>

      <Link
        href="/movies"
        className={`py-2 no-underline hover:text-primary duration-300 ${
          path === "/movies" ? "text-primary" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <Film size={24} className={` text-primary`} />
          <p className={` max-[450px]:hidden`}>Filmes</p>
        </div>
      </Link>

      <Link
        href="/series"
        className={`py-2 no-underline hover:text-primary duration-300 ${
          path === "/series" ? "text-primary" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <Tv size={24} className={` text-primary`} />
          <p className={` max-[450px]:hidden`}>TV | Séries</p>
        </div>
      </Link>
    </nav>
  );
}
