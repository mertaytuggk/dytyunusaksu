import Navbar from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <main className=" flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
