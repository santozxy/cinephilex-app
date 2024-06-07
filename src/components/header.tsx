import { SearchBar } from "./search-bar";
import { Suspense } from "react";
import { NavLinks } from "./nav-links";

export default function Header() {
  return (
    <div className="p-3 grid grid-cols-3 w-full max-sm:place-items-center bg-zinc-900 max-sm:grid-cols-1 px-6 h-20 max-sm:h-32 shadow-xl sticky top-0 z-[99999]">
      <nav className="flex items-center">
        <h1 className="text-2xl max-sm:hidden text-primary font-semibold">
          CinephileX
        </h1>
      </nav>
      <NavLinks />
      <nav className="flex gap-4 items-center justify-end">
        <Suspense>
          <SearchBar />
        </Suspense>
      </nav>
    </div>
  );
}
