import React from 'react';

import styles from './CardMinimum.module.css'
import Image from "next/image";

import temp from '../../../public/temp2.jpg';
import Link from "next/link";

function CardMininum(props) {


    return (
        <Link href={'#'}>
            <div className={styles.main}>
                <div className={styles.image} >
                    <Image src={temp} alt={'img'} height={250} />
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <h1>TILE some for me</h1>
                    </div>
                    <div className={styles.description}>
                        <h3>TILE some for me TILE some for me TILE some for me TILE some for me</h3>
                    </div>
                    <div className={styles.more_info}>
                        <div className={styles.date}>
                            01.02.2004
                        </div>
                        <div className={styles.money}>
                            500$ per month
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardMininum;