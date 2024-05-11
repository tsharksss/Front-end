import React from 'react';
import LeftHand from "../../../components/LeftHand/LeftHand";
import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";

import styles from "./posts.module.css"
import BigCard from "../../../components/PostCard/bigCard/bigCard";
import CardMedium from "../../../components/PostCard/CardMedium/CardMedium";
import CardMininum from "../../../components/PostCard/CardMinimum/CardMininum";

function PostsPage(props) {
    return (
        <div className={styles.page}>
            <Header/>
                <div className={styles.main}>
                    <div className={styles.flex}>
                        <LeftHand/>
                        <div>
                            <BigCard/>
                            <div className={styles.another_flex}>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                            </div>
                            <BigCard/>
                        </div>

                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default PostsPage;