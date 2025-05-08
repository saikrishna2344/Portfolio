import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../util";

export const About = () => {
    return ( 
        <section className={`${styles.container} ${styles.shadowHover}`} id="About">
            {/* Blur background elements */}
            <div className={`${styles.blurEffect} ${styles.blurTop}`}></div>
            <div className={`${styles.blurEffect} ${styles.blurBottom}`}></div>

            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                  src={getImageUrl("assets/about/Images.png")} alt="Me sitting" className={styles.image}/>
                <ul className={styles.about}>
                  <li className={styles.item1}>
                    <img src={getImageUrl("assets/about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.item2}>
                        <h3>Frontend Developer</h3>
                        <p>Aspiring Front-End Developer focused on creating clean, responsive, and user-friendly web interfaces. 
                           Enthusiastic about learning new technologies and contributing to innovative projects. 
                        </p>
                    </div>
                  </li>
                  <li className={styles.item1}>
                    <img src={getImageUrl("assets/about/serverIcon.png")} alt="server icon" />
                    <div className={styles.item2}>
                        <h3>Backend Developer</h3>
                        <p>Aspiring Backend Developer with a strong focus on building reliable APIs, managing databases, and delivering seamless server-side solutions.
                           Dedicated to continuous learning and improvement.
                        </p>
                    </div>
                  </li>
                  <li className={styles.item1}>
                    <img src={getImageUrl("assets/about/uiIcon.png")} alt="ui icon" />
                    <div className={styles.item2}>
                        <h3>Database Management</h3>
                        <p>Focused on building a strong foundation in database management in SQL. While I am still learning NoSQL technologies,
                           I am eager to expand my skills in both relational and non-relational databases for scalable solutions.
                        </p>
                    </div>
                  </li>
                  
                </ul>
            </div>
        </section>
    )
}


