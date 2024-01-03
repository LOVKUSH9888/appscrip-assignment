import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import Menu from "./components/Header/Menu/Menu";
import TopHeader from "./components/Header/TopHeader/TopHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Header */}
      <TopHeader/>
      <MainHeader/>
      <Menu/>
      {/* Main */}

      {/* Footer */}
      <Footer/>
    </>
  );
}
