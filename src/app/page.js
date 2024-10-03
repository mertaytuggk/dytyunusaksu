import Image from "next/image";
import styles from "./page.module.css";
import MainPage from "./Home/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}
