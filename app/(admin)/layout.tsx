
import DashboardHeader from "@/components/layout/DashboardHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="w-full flex justify-center flex-col">
      <DashboardHeader />
      <div className="container flex justify-center">{children}</div>
    </div>
        
  );
}
