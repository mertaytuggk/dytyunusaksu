import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import About from "@/app/About/page";
import MainPage from "./Home/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}
