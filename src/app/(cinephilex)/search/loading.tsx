import { Skeleton } from "@/components/skeleton";

export default function SearchLoading() {
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      {[...Array(15)].map((_, index) => (
        <div key={index} className="">
          <Skeleton className="w-[15rem] h-[20rem]" />
        </div>
      ))}
    </section>
  );
}
