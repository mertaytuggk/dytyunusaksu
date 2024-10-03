"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../../../public/darklogo.png";
import DoktorumLogo from "../../../public/DoktorumLogo.png";
import { FaInstagram, FaPlus, FaBars } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* MOBİLE MENU BAŞLANGICI*/}
      <div
        className={` relative flex items-center justify-between bg-[#f0f0f0] p-8 ${styles.mainMobile}`}
      >
        <div>
          <Link href={"/"} className="items-left flex flex-col">
            <Image className="w-[35%]" src={Logo} alt="NavbarLogo" />

            <span className="text-base">Diyetisyen Yunus Aksu</span>
          </Link>
        </div>
        <button onClick={() => setOpen(!open)}>
          <FaBars size={24} />
        </button>
      </div>{" "}
      {open ? (
        <div className=" absolute top-0 h-[100dvh] w-[100dvw] bg-[#f5c28b] px-12 py-16 ">
          <button
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 rotate-45"
          >
            <FaPlus size={24} />
          </button>
          <div
            onClick={() => setOpen(!open)}
            className="items-left flex flex-col gap-6"
          >
            <Link href={"/"}>Ana Sayfa</Link>
            <Link href={"/About"}>Beni Tanıyın</Link>
            <Link href={"/Services"}>Hizmetler</Link>
            <Link href={"/Blog"}>Blog</Link>
            <Link href={"/Contact"}>İletişim</Link>
            <Link href={"/Terms"}>Kullanım Şartları</Link>
            <Link href={"mailto:dyt.yunusaksu@gmail.com"}>
              dyt.yunusaksu@gmail.com
            </Link>
            <Link href={"tel:+90 534 544 05 06"}>+90 534 544 05 06</Link>
            <Link href={""} target="_blank">
              <Image src={DoktorumLogo} alt="Doktorum Logo" />
            </Link>
            <Link
              href={"https://www.instagram.com/diyetisyenyunusaksu/"}
              target="_blank"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      ) : (
        <span></span>
      )}{" "}
      {/* MOBİLE MENU SONU*/}
      {/* WEB MENU BAŞLANGICI*/}
      <div
        className={`flex items-center justify-between bg-[#f8f4f1] p-5 shadow-lg ${styles.mainHeader}`}
      >
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center font-semibold"
        >
          <Image className="h-1/2 w-1/2" src={Logo} alt="NavbarLogo" />

          <span className="text-base">Diyetisyen Yunus Aksu</span>
        </Link>
        <Link
          href={"/"}
          target="_blank"
          className="rounded-[0.2rem] bg-[#a34a21] px-6 py-3 text-[1.1rem] font-medium text-white hover:bg-[#c15a31] "
        >
          Randevu Al
        </Link>
      </div>
      <div className={` ${styles.upBarMain}`}>
        <div className={` shadow-lg ${styles.upBar}`}>
          <span className={styles.menuUpBar}>
            <Link href={"/"}>Ana Sayfa</Link>
            <Link href={"/About"}>Beni Tanıyın</Link>
            <Link href={"/Services"}>Hizmetler</Link>
            <Link href={"/Blog"}>Blog</Link>
            <Link href={"/Contact"}>İletişim</Link>
            <Link href={"/Terms"}>Kullanım Şartları</Link>
          </span>
          <span className={styles.menuUpBar}>
            <Link href={"mailto:dyt.yunusaksu@gmail.com"}>
              dyt.yunusaksu@gmail.com
            </Link>
            <Link href={"tel:+90 534 544 05 06"}>+90 534 544 05 06</Link>
            <Link className={styles.logoHeader} href={""} target="_blank">
              <Image
                className={styles.logoHeader}
                src={DoktorumLogo}
                alt="Doktorum Logo"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/diyetisyenyunusaksu/"}
              target="_blank"
            >
              <FaInstagram size={20} />
            </Link>
          </span>
        </div>
      </div>
      {/* WEB MENU SONU*/}
    </div>
  );
};

export default Header;
