"use client";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const comments = [
  {
    name: "Nüshet T.",
    location: "Ankara",
    comment:
      "Yunus Bey ile diyet sürecimde 6 aylık bir sürede 35 kilo vererek hedefime ulaştım...",
  },
  {
    name: "Ali K.",
    location: "İstanbul",
    comment:
      "Diyetisyen Yunus Bey sayesinde sağlıklı beslenmeyi öğrendim ve enerji dolu hissediyorum...",
  },
  {
    name: "Mert Aytuğ G.",
    location: "Mersin",
    comment:
      "Diyetisyen Yunus Bey sayesinde artık makine gibiyim. Çok teşekkür ederim...",
  },
  {
    name: "Derya G.",
    location: "Mersin",
    comment:
      "Diyetisyen Yunus Bey sayesinde düğünüme istediğim fizik ile gerçekleştirdim...",
  },
  {
    name: "Semra Y.",
    location: "Ankara",
    comment:
      "Diyetisyen Yunus Bey'in sporcu danışmanlığı sayesinde avrupa şampiyonu oldum. İyi ki var...",
  },
  // Daha fazla yorum ekleyebilirsin...
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  return (
    <div className="relative mx-auto mb-32 w-full max-w-6xl rounded-2xl py-16 shadow-2xl">
      <div className="relative overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {comments.map((item, index) => (
            <div
              key={index}
              className="inline-block w-full space-y-4 rounded-lg bg-white px-8 py-6 text-gray-800 shadow-lg"
            >
              <p className="px-12 text-lg italic">{item.comment}</p>
              <div className="text-right">
                <span className="font-semibold">{item.name}</span>,{" "}
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
        <button
          onClick={handlePrev}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <AiOutlineLeft className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 transform">
        <button
          onClick={handleNext}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <AiOutlineRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
