import Head from "next/head";
import Image from "next/image";
import BannerPage from "../components/HomePage/BannerPage";
import BoostPage from "../components/HomePage/BoostPage";
import BrowserPage from "../components/HomePage/BrowserPage";
import ChangewayPage from "../components/HomePage/ChangewayPage";
import CodePage from "../components/HomePage/CodePage";
import styles from "../styles/Home.module.css";
import AccordionPage from "../components/HomePage/AccordionPage";
import CollaborationPage from "../components/HomePage/CollaborationPage";
import Productivity from "../components/HomePage/Productivity";
import CreativePage from "../components/HomePage/CreativePage";
import AntdAcc from "../components/HomePage/AntdAcc";
import LogoSlide from "../components/HomePage/LogoSlide";
import Testimonial from "../components/HomePage/Testimonial";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <LogoSlide />
      <BrowserPage />
      <CodePage />
      <BoostPage />
      {/* <CollaborationPage /> */}
      {/* <Productivity /> */}
      <CreativePage />
      <ChangewayPage />
      <Testimonial />
      {/* <AntdAcc/> */}
      <AccordionPage />
    </div>
  );
}
