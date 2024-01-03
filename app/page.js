import FetchedData from "./components/FetchedData/FetchedData";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProHead from "./components/Heading/ProHead";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Heading */}
      <ProHead/>
      {/* Main */}
      <FetchedData/>
      {/* Footer */}
      <Footer />
    </>
  );
}
