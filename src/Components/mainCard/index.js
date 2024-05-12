import React from "react";
import styles from "./mainCard.module.css";
import { FaInstagram } from "react-icons/fa";
import DoktorumLogo from "../../../public/DoktorumLogo.png";
import Logo from "../../../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.leftCard}>
        <span className={styles.cardTitle}>Selam, Ben Yunus Aksu</span>
        <span className={styles.textCard}>
          Mesleğime başladığımdan beri amacım; birçok insanın hayatına dokunarak
          onlara sağlıklı beslenmeyi öğretmek. Bugüne dek yüzlerce danışanımla
          bunu başardık ve başarmaya devam ediyoruz.
        </span>
        <span className={styles.downCard}>
          <Link className={styles.buttonCard} href={"/About"}>
            Beni Tanıyın
          </Link>
          <span className={styles.LogoFlex}>
            <Link href={""} target="_blank">
              <Image
                className={styles.logoCard}
                src={DoktorumLogo}
                alt="Doktorum Logo"
              />
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
      <div className={styles.rightCard}>fotoğraf</div>
    </div>
  );
};

export default index;
