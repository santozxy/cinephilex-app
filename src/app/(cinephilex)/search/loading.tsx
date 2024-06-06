import { Skeleton } from "@/components/skeleton";

export default function SearchLoading() {
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      {[...Array(14)].map((_, index) => (
        <div key={index} className="">
          <Skeleton className="w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md shadow-lg shadow-black/30" />
        </div>
      ))}
    </section>
  );
}
