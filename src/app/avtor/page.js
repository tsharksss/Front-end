import React from 'react';
import styles from './avtor.module.css'
import LeftHand from '../../../components/LeftHand/LeftHand';
import CardMininum from '../../../components/PostCard/CardMinimum/CardMininum';
import BigCard from '../../../components/PostCard/bigCard/bigCard';


function Page(props) {

    return (
        <div className={styles.main}>
                    <div className={styles.flex}>
                        <LeftHand avtor_page={true}/>
                        <div>
                            <div className={styles.title}>
                            <h1>Описание</h1>
                            </div>
                            <div className={styles.about}>
                                <h1>Когда ввечеру Илагин распростился с Николаем, Николай оказался на таком далеком расстоянии от дома, что он принял предложение дядюшки оставить охоту, ночевать у него (у дядюшки) в его деревне Михайловке. — И если бы заехали ко мне — чистое дело марш! — сказал дядюшка, — еще бы того лучше; видите, погода мокрая, — говорил дядюшка, — отдохнули бы, графинечку бы отвезли в дрожках. — Предложение дядюшки было принято, за дрожками послали охотника в Отрадное; а Николай с Наташей и Петей поехали к дядюшке. Человек пять, больших и малых, дворовых мужчин выбежало на парадное крыльцо встречать барина. Десятки женщин, старых, больших и малых, высунулись с заднего крыльца смотреть на подъехавших охотников. Присутствие Наташи, женщины, барыни, верхом, довело любопытство дворовых дядюшки до тех пределов удивления, что многие, не стесняясь ее присутствием, подходили к ней, заглядывали ей в глаза и при ней делали о ней свои замечания, как о показываемом чуде, которое не человек и не может слышать и понимать, что</h1>
                            </div>
                            <div className={styles.title}>
                            <h1>Контент</h1>
                            </div>
                            <div className={styles.content}>
                                <BigCard />
                            
                                <BigCard />
                                <BigCard />
                                <BigCard />
                            </div>
                        </div>

                    </div>
                </div>
    );
}

export default Page;