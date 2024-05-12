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
      <div className={styles.mainMobile}>
        <div>
          <Link href={"/"} className={styles.headerLogoMobil}>
            <Image className={styles.mobilLogo} src={Logo} alt="NavbarLogo" />

            <span className={styles.mobilSaksu}>Diyetisyen Yunus Aksu</span>
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className={styles.mobilIcon}>
          <FaBars size={24} />
        </button>
      </div>{" "}
      {open ? (
        <div className={styles.openMenu}>
          <button onClick={() => setOpen(!open)} className={styles.menuClose}>
            <FaPlus size={24} />
          </button>
          <div className={styles.gridMenu}>
            <Link href={"/"}>Ana Sayfa</Link>
            <Link href={"/about"}>Beni Tanıyın</Link>
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
      <div className={styles.mainHeader}>
        <Link href={"/"} className={styles.headerLogo}>
          <Image className={styles.Logo} src={Logo} alt="NavbarLogo" />

          <span className={styles.Saksu}>Diyetisyen Yunus Aksu</span>
        </Link>
        <Link href={"/"} target="_blank" className={styles.randevuButton}>
          Randevu Al
        </Link>
      </div>
      <div className={styles.upBarMain}>
        <div className={styles.upBar}>
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
            <button></button>
          </span>
        </div>
      </div>
      {/* WEB MENU SONU*/}
    </div>
  );
};

export default Header;
