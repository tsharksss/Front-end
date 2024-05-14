import React from 'react';
import styles from "./bigCard.module.css";
import Image from "next/image";
import photo from "../../../public/temp.jpg";
import temp from "../../../public/temp2.jpg";
import LittleCard from '../../user_profile/littleCard/littleCard';

function BigCard({title, description, image, post = false, avtor = false}) {


    return (
        <div>
            <div className={styles.main}>
                <div className={styles.image} >
                    <Image src={temp} alt={'img'}/>
                </div>
                {post === false ?
                <div className={styles.text}>
                    <div className={styles.flex}>
                        <div className={styles.title_text}>
                            <h1 className={styles.title}> {title} TITLE TEXT TITLE TEXTTITLE TEXTTITLE TEXTTITLE
                                TEXT </h1>
                            <h3 className={styles.avtor}> Автор </h3>
                        </div>
                        <div className={styles.money}>
                            <h2 className={styles.money_title}> $500 month</h2>
                        </div>
                    </div>
                    <p className={styles.description}>{description} Some text for uuuu</p>
                </div> : null}
            </div>
           {!post ?  <div className={styles.check_point}>
                                    {avtor ?
                                    <>
                                    <LittleCard/> 
                                    <div className={styles.f}>
                                    <h3>Просмотров</h3>
                                    <p>1 000 000</p>
                                    </div >
                                    <div className={styles.f}>
                                    <h3>Дата публикации</h3>
                                    <p>01.20.2004</p>
                                    </div >
                                    </> 
                                    
                                    : 
                                    <>
                                    <div className={styles.f}>
                                    <h3>Просмотров</h3>
                                    <p>1 000 000</p>
                                    </div >
                                    <div className={styles.f}>
                                    <h3>Оценок</h3>
                                    <p>30 000</p>
                                    </div >
                                    <div className={styles.f}>
                                    <h3>Дата публикации</h3>
                                    <p>01.20.2004</p>
                                    </div > 
                                    </>
                                    }
                                   
            </div> : null}
        </div>
    );
}

export default BigCard;