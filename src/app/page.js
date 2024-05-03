import Image from "next/image";
import styles from "./page.module.css";

import BlueButton from '../../components/buttons/BlueButton/BlueButton'
import TransprentWhiteButton from '../../components/buttons/TransprentWhiteButton/TransprentWhiteButton'
import SecondBlueButton from '../../components/buttons/SecondBlueButton/SecondBlueButton'
import YourTalantMoney from '../../components/YourTalantMoney/YourTalantMoney'
export default function Home() {
  return (
    <>
      {/*<BlueButton/>*/}
      {/*<TransprentWhiteButton/>*/}
      {/*<SecondBlueButton/>*/}

      <YourTalantMoney/>
    </>
  );
}
