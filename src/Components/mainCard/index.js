import React from "react";
import styles from "./mainCard.module.css";
import { FaInstagram } from "react-icons/fa";
import DoktorumLogo from "../../../public/DoktorumLogo.png";
import Yunus from "../../../public/yunus.JPG";
import Logo from "../../../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div
      className={`flex justify-around bg-[#f8f4f1] px-36 py-8 font-medium shadow-md ${styles.mainCard}`}
    >
      <div
        className={`items-left flex w-[60%] flex-col justify-center gap-12 ${styles.leftCard}`}
      >
        <span className={`text-[2rem] ${styles.cardTitle}`}>
          Selam, Ben Yunus Aksu
        </span>
        <span className={`w-[55%] text-xl ${styles.textCard}`}>
          Mesleğime başladığımdan beri amacım; birçok insanın hayatına dokunarak
          onlara sağlıklı beslenmeyi öğretmek. Bugüne dek yüzlerce danışanımla
          bunu başardık ve başarmaya devam ediyoruz.
        </span>
        <span className={`flex w-[60%] justify-between ${styles.downCard}`}>
          <Link
            className={`rounded-lg bg-[#a34a21] px-4 py-2 text-lg text-white hover:bg-[#c15a31] ${styles.buttonCard}`}
            href={"/About"}
          >
            Beni Tanıyın
          </Link>
          <span className={`item flex gap-6 ${styles.LogoFlex}`}>
            <Link href={""} target="_blank">
              <Image className="w-8" src={DoktorumLogo} alt="Doktorum Logo" />
            </Link>{" "}
            <Link
              href={"https://www.instagram.com/diyetisyenyunusaksu/"}
              target="_blank"
            >
              <FaInstagram size={32} />
            </Link>
          </span>
        </span>
      </div>
      <div className={`w-[40%] ${styles.rightCard}`}>
        <Image className="rounded-xl shadow-2xl" src={Yunus} alt="Yunus" />
      </div>
    </div>
  );
};

export default index;
