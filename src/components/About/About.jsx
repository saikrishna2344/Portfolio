// import React from "react";
// import styles from "./About.module.css";
// import { getImageUrl } from "../../util";

// export const About = () => {
//     return ( 
//         <section className={`${styles.container} ${styles.shadowHover}`} id="About">
//             <div className={`${styles.blurEffect} ${styles.blurTop}`}></div>
//             <div className={`${styles.blurEffect} ${styles.blurBottom}`}></div>

//             <h2 className={styles.title}>About</h2>
//             <div className={styles.content}>
//                 <img 
//                   src={getImageUrl("assets/about/Images.png")} alt="Me sitting" className={styles.image}/>
//                 <ul className={styles.about}>
//                   <li className={styles.item1}>
//                     <img src={getImageUrl("assets/about/cursorIcon.png")} alt="cursor icon" />
//                     <div className={styles.item2}>
//                         <h3>Frontend Developer</h3>
//                         <p>Aspiring Front-End Developer focused on creating clean, responsive, and user-friendly web interfaces. 
//                            Enthusiastic about learning new technologies and contributing to innovative projects. 
//                         </p>
//                     </div>
//                   </li>
//                   <li className={styles.item1}>
//                     <img src={getImageUrl("assets/about/serverIcon.png")} alt="server icon" />
//                     <div className={styles.item2}>
//                         <h3>Backend Developer</h3>
//                         <p>Aspiring Backend Developer with a strong focus on building reliable APIs, managing databases, and delivering seamless server-side solutions.
//                            Dedicated to continuous learning and improvement.
//                         </p>
//                     </div>
//                   </li>
//                   <li className={styles.item1}>
//                     <img src={getImageUrl("assets/about/uiIcon.png")} alt="ui icon" />
//                     <div className={styles.item2}>
//                         <h3>Database Management</h3>
//                         <p>Focused on building a strong foundation in database management in SQL. While I am still learning NoSQL technologies,
//                            I am eager to expand my skills in both relational and non-relational databases for scalable solutions.
//                         </p>
//                     </div>
//                   </li>
                  
//                 </ul>
//             </div>
//         </section>
//     )
// }
import React from "react";
import styles from "./About.module.css";

// Import images directly
import aboutMainImg from "../../assets/about/images.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

export const About = () => {
    // Style for images
    const imageStyle = {
        width: "60px", // Adjust the size as needed
        height: "60px",
        objectFit: "contain",
        borderRadius: "8px",
    };

    return ( 
        <section className={`${styles.container} ${styles.shadowHover}`} id="About">
            <div className={`${styles.blurEffect} ${styles.blurTop}`}></div>
            <div className={`${styles.blurEffect} ${styles.blurBottom}`}></div>

            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                  src={aboutMainImg}
                  alt="Me sitting"
                  className={styles.image}
                  style={{
                    width: "300px", // Adjust as needed
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "12px",
                  }}
                />
                <ul className={styles.about}>
                  <li className={styles.item1}>
                    <img src={cursorIcon} alt="cursor icon" style={imageStyle} />
                    <div className={styles.item2}>
                        <h3>Frontend Developer</h3>
                        <p>Aspiring Front-End Developer focused on creating clean, responsive, and user-friendly web interfaces.</p>
                    </div>
                  </li>
                  <li className={styles.item1}>
                    <img src={serverIcon} alt="server icon" style={imageStyle} />
                    <div className={styles.item2}>
                        <h3>Backend Developer</h3>
                        <p>Aspiring Backend Developer with a strong focus on building reliable APIs, managing databases, and delivering seamless server-side solutions.</p>
                    </div>
                  </li>
                  <li className={styles.item1}>
                    <img src={uiIcon} alt="ui icon" style={imageStyle} />
                    <div className={styles.item2}>
                        <h3>Database Management</h3>
                        <p>Focused on building a strong foundation in SQL and eager to expand into NoSQL technologies.</p>
                    </div>
                  </li>
                </ul>
            </div>
        </section>
    );
};
