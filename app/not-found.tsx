import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="flex flex-col items-center justify-center  text-indigo-950 min-h-screen">
        <h1 className="text-indigo-950 text-9xl mb-4 font-extrabold">404</h1>
        <h2 className="text-4xl  mb-2 font-bold"> Səhifə tapılmadı</h2>
        <p className="text-lg text-center max-w-md mb-8">
          Üzr istəyirik, axtardığınız səhifəni tapa bilmirik. Ola bilsin ki,
          səhifə silinmiş, adı dəyişdirilmiş və ya müvəqqəti olaraq əlçatan
          deyil.
        </p>
        <Link
          href="/"
          className="bg-indigo-950 text-white px-6 py-4 rounded-full hover:bg-secondary"
        >
          Ana səhifəyə geri qayıdın
        </Link>

        <p className="text-indigo-950 mt-10">
          Bizimlə əlaqə saxlamaq üçün: info@kinema.az
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
