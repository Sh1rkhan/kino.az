import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
      <div className="w-full flex justify-center flex-col">
        <Header />
        <div className="w-full min-h-screen ">{children}</div>
        <Footer />
      </div>
    );
}
