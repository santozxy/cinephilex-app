import Header from "@/components/header";

export default function CinephilexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}
