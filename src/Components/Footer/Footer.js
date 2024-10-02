import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-8 bg-[#f8f4f1] py-20 text-center text-xl sm:px-4 sm:py-8">
      <span className="font-semibold">Diyetisyen Yunus Aksu</span>{" "}
      <Link href={"mailto:dyt.yunusaksu@gmail.com"}>
        dyt.yunusaksu@gmail.com
      </Link>{" "}
      <Link href={"tel:+90 534 544 05 06"}>+90 534 544 05 06</Link>
      <span>
        {" "}
        Kızılcaşar Mahallesi Mehmetçik Caddesi No:21 İncek/Gölbaşı/Ankara
      </span>
      <span className=" flex flex-col">
        <span className="text-sm font-medium">
          Telif Hakkı © 2024 YUNUS AKSU
        </span>
        <span className="text-sm font-medium">Tüm Hakları Saklıdır.</span>
      </span>
    </div>
  );
};

export default Footer;
