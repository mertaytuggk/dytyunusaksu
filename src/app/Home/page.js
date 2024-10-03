import React from "react";
import Card from "@/Components/mainCard";
import { Packets } from "@/Components/Packets/Packets";
import Footer from "@/Components/Footer/Footer";

export default function MainPage() {
  return (
    <div className="flex h-[100dvh] flex-col justify-between">
      <Card />
      <Packets />
      <span className="w-[100dvw]">
        <Footer />
      </span>
    </div>
  );
}
