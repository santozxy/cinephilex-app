import Header from "@/components/header";

export default function CinephilexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
    </div>
  );
}
