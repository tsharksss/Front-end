import Image from "next/image";
import styles from "./page.module.css";

import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import TransprentWhiteButton from '../../components/buttons/TransprentWhiteButton/TransprentWhiteButton'
import SecondBlueButton from '../../components/buttons/SecondBlueButton/SecondBlueButton'

import YourTalantMoney from '../../components/YourTalantMoney/YourTalantMoney'
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import HowItWork from "../../components/HowItWork/HowItWork";
import PopularPosts from "../../components/PopularPosts/PopularPosts";

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
        <Footer/>
    </>
  );
}
