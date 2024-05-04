import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.mainFooter}>
      <span className={styles.footerName}>Diyetisyen Yunus Aksu</span>{" "}
      <Link href={"mailto:dyt.yunusaksu@gmail.com"}>
        dyt.yunusaksu@gmail.com
      </Link>{" "}
      <Link href={"tel:+90 534 544 05 06"}>+90 534 544 05 06</Link>
      <span>
        {" "}
        Kızılcaşar Mahallesi Mehmetçik Caddesi No:21 İncek/Gölbaşı/Ankara
      </span>
    </div>
  );
};

export default Footer;
