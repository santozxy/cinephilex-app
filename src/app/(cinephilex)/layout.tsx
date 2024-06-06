import Header from "@/components/header";

export default function CinephilexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="">
      <Header />
      <main className="px-6 pb-6">{children}</main>
    </div>
  );
}
