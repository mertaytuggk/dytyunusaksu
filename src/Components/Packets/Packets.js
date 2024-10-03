import React from "react";
import styles from "./Packets.module.css";

export const Packets = () => {
  return (
    <div
      className={`mt-24 flex flex-col justify-center gap-20 ${styles.packetsMain}`}
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <span className="text-6xl">Neler Yapıyoruz?</span>
        <span className="text-xl text-[#a34a21]">
          Beslenme danışmanlığı sürecini en etkili hale getirmek için:
        </span>
      </div>
      <div
        className={`flex items-center justify-center gap-12 ${styles.flexPackets}`}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            key={index}
            className={`flex w-[25%] flex-col items-center justify-between gap-8 text-center ${styles.infoText}`}
          >
            <span>logo</span>
            <span className="text-xl text-[#a34a21] ">Tanışıyoruz!</span>
            <span className="align-baseline">
              Sağlık öykünüz, kullandığınız ilaçlar, kan değerleriniz, fiziksel
              aktivite durumunuz, yaşam tarzınız, beslenme alışkanlıklarınız
              hakkında bilgi sahibi oluyorum.
            </span>
          </span>
        ))}
      </div>
      <div className="mb-20" />{" "}
    </div>
  );
};
