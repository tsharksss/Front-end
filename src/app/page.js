import Image from "next/image";
import styles from "./page.module.css";

import YourTalantMoney from '../../components/YourTalantMoney/YourTalantMoney'
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import HowItWork from "../../components/HowItWork/HowItWork";
import PopularPosts from "../../components/PopularPosts/PopularPosts";
import WorkWithUs from "../../components/WorkWithUs/WorkWithUs";
import YourWelcome from "../../components/YourWelcome/YourWelcome";

export default function Home() {
  return (
    <>
      {/*<BlueButton/>*/}
      {/*<TransprentWhiteButton/>*/}
      {/*<SecondBlueButton/>*/}
        <Header/>
            <YourTalantMoney/>
            <HowItWork/>
            <PopularPosts/>
            <WorkWithUs/>
            <YourWelcome/>
        <Footer/>
    </>
  );
}
