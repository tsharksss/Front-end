import React from 'react';

import styles from './YourWelcome.module.css';
import Image from "next/image";

import leftTop from '../../public/yourWelcome/Vector5.svg'
import leftBottom from '../../public/yourWelcome/Vector4.svg'

import rightTop from '../../public/yourWelcome/Vector3.svg'
import rightBottom from '../../public/yourWelcome/Vector2.svg'

import mainimage from '../../public/yourWelcome/GoodTeam.svg'

function YourWelcome(props) {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>Присоединяйтесь!</h1>
            </div>
            <div className={styles.leftTop}>
                <Image src={leftTop} alt={'img'}/>
            </div>
            <div className={styles.leftBottom}>
                <Image src={leftBottom} alt={'img'}/>
            </div>
            <div className={styles.rightTop}>
                <Image src={rightTop} alt={'img'}/>
            </div>
            <div className={styles.rightBottom}>
                <Image src={rightBottom} alt={'img'}/>
            </div>
        </div>
    );
}

export default YourWelcome;