import React from 'react';
import styles from './header.module.css';

import logo_dark from '../../public/logo/Logo_dark.png';
import Image from "next/image";
import BlueButton from "../buttons/BlueButton/BlueButton";
import TransprentWhiteButton from "../buttons/TransprentWhiteButton/TransprentWhiteButton";

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.main_header}>
                <div className={styles.heser_logo}>
                    <Image src={logo_dark} alt={'img'} height={100} />
                </div>
                <div className={styles.header_info}>
                    <TransprentWhiteButton text={'Регистрация'}/>
                    <BlueButton text={'Войти'}/>
                </div>
            </div>

        </div>
    );
}

export default Header;