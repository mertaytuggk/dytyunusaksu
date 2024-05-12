import React from "react";
import styles from "./Packets.module.css";

export const Packets = () => {
  return (
    <div className={styles.packetsMain}>
      <div className={styles.packetsTitle}>
        <span className={styles.title}>Neler Yapıyoruz?</span>
        <span className={styles.text}>
          Beslenme danışmanlığı sürecini en etkili hale getirmek için:
        </span>
      </div>
      <div className={styles.flexPackets}>
        <span className={styles.infoText}>
          <span>logo</span>
          <span className={styles.text}>Tanışıyoruz!</span>
          <span className={styles.info}>
            Sağlık öykünüz, kullandığınız ilaçlar, kan değerleriniz, fiziksel
            aktivite durumunuz, yaşam tarzınız, beslenme alışkanlıklarınız
            hakkında bilgi sahibi oluyorum.
          </span>
        </span>
        <span className={styles.infoText}>
          <span>logo</span>
          <span className={styles.text}>Tanışıyoruz!</span>
          <span className={styles.info}>
            Sağlık öykünüz, kullandığınız ilaçlar, kan değerleriniz, fiziksel
            aktivite durumunuz, yaşam tarzınız, beslenme alışkanlıklarınız
            hakkında bilgi sahibi oluyorum.
          </span>
        </span>{" "}
        <span className={styles.infoText}>
          <span>logo</span>
          <span className={styles.text}>Tanışıyoruz!</span>
          <span className={styles.info}>
            Sağlık öykünüz, kullandığınız ilaçlar, kan değerleriniz, fiziksel
            aktivite durumunuz, yaşam tarzınız, beslenme alışkanlıklarınız
            hakkında bilgi sahibi oluyorum.
          </span>
        </span>
      </div>
    </div>
  );
};
