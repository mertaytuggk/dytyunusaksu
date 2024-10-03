import Footer from "@/Components/Footer/Footer";
import React from "react";
import Yunus from "../../../public/yunus.JPG";
import Image from "next/image";
import Link from "next/link";
import Aksu from "../../../public/Aksu.JPG";

export default function Services() {
  return (
    <>
      <span className=" flex flex-col items-center justify-center pt-12 text-center  md:text-2xl lg:text-6xl">
        Birlikte Neler Yapabiliriz?
        <div className="flex min-h-screen items-center justify-center py-12">
          <span className="grid px-64 md:grid-cols-1 xl:grid-cols-2 ">
            {" "}
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className=" flex  flex-col  items-center justify-center  text-center"
              >
                <Image
                  className=" w-[50%] rounded-t-full"
                  src={Aksu}
                  alt="Yunus"
                />
                <span className="pt-4 text-left text-lg  font-semibold">
                  Yüz Yüze Beslenme Danışmanlığı
                </span>
                <Link
                  className="py-4 text-lg underline hover:text-[#a34a21]"
                  href={"/Contact"}
                >
                  Detaylı Bilgi İçin Tıklayınız
                </Link>
              </span>
            ))}
          </span>
          {/* <div className="grid w-full grid-cols-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="flex w-[25%] flex-col items-center justify-between gap-8 text-center"
            >
              <Image src={Yunus} alt="Yunus" />
              <span className="text-xl text-[#a34a21]">Tanışıyoruz!</span>
              <span className="align-baseline">
                Sağlık öykünüz, kullandığınız ilaçlar, kan değerleriniz,
                fiziksel aktivite durumunuz, yaşam tarzınız, beslenme
                alışkanlıklarınız hakkında bilgi sahibi oluyorum.
              </span>
            </span>
          ))}
        </div>*/}{" "}
        </div>{" "}
      </span>
      <Footer />
    </>
  );
}
