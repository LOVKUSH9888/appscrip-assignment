import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import TopHeader from "./components/Header/TopHeader/TopHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Header */}
      <TopHeader/>
      <MainHeader/>

      {/* Main */}

      {/* Footer */}
      <Footer/>
    </>
  );
}
