import React from "react";
import Card from "@/Components/mainCard";
import { Packets } from "@/Components/Packets/Packets";
import styles from "./Home.module.css";

export default function MainPage() {
  return (
    <div className={styles.Home}>
      <Card />
      <Packets />
    </div>
  );
}
