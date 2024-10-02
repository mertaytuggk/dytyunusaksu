import React from "react";
import Yunus from "../../../public/yunus.JPG";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex w-full items-center justify-center py-12">
      <div className="grid w-[45%] items-center justify-center  gap-8 text-center">
        <Image className="rounded-[150%]" src={Yunus} alt="Yunus" />
        <div className=" grid items-center justify-between gap-8 rounded-md bg-rose-100  py-8">
          <span className="text-xl font-bold">
            Merhaba, ben Diyetisyen Yunus Aksu
          </span>
          <span className="text-lg font-medium">
            Hayalimdeki mesleğe Hacettepe Üniversitesinde Beslenme ve Diyetetik
            bölümünü şeref öğrencisi olarak tamamlayarak ulaştım.
          </span>
          <span className="text-lg font-medium">
            Üniversite eğitimim süresince Canan Aksoy Beslenme Danışmanlığı
            Merkezi, Hacettepe Üniversitesi Erişkin Hastanesi, Hacettepe
            Üniversitesi Onkoloji Hastanes, ve İhsan Doğramacı Çocuk
            Hastanesi’nde yetişkin ve çocuk beslenmesi üzerine, Ankara Şehir
            Hastanesi ve Hacettepe Üniversitesi Kafeteryaları mutfaklarında
            kurum beslenmesi üzerine stajlar yaparak kendimi mesleğime
            hazırladım.
          </span>
          <span className="text-lg font-medium">
            Lisans eğitimimin son yılında Müziğin Varlığı, Müzik Türü ve
            Şiddetinin Akut Besin Tüketimine Etkisi konulu bir tez ve Sirkadiyen
            Ritim ve Beslenme konulu bir seminer hazırladım.
          </span>
          <span className="text-lg font-medium">
            Sporcu Beslenmesi, Bariatrik Cerrahi, Obezite ve Diyabet Tedavisi
            gibi konular başta olmak üzere birçok eğitim ve kurslara katıldım.
            Hala da bilgilerimi güncel tutabilmek adına katılımlara devam
            ediyorum.
          </span>
          <span className="text-lg font-medium">
            Meslek hayatıma bir spor kompleksinde beslenme danışmanlığı hizmeti
            vererek başladım, bir güzellik merkezinde ve bir diyet kliniğinde de
            hizmet verdikten sonra kendi beslenme danışmanlığı merkezimi kurdum.
            Mesleğime kendi markam adı altında devam ediyorum.
          </span>
          <span className="text-lg font-medium">
            Mesleğime başladığımdan beri amacım; birçok insanın hayatına
            dokunarak onlara sağlıklı beslenmeyi öğretmek. Bugüne dek yüzlerce
            danışanımla bunu başardık ve başarmaya devam ediyoruz.
          </span>
        </div>
      </div>
    </div>
  );
}
