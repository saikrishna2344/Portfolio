import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
    <footer id="Contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img className={styles.invertible} src={getImageUrl("assets/Contact/emailIcon.png")} alt="Email Icon" />
                <a className={styles.a}
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=mskrishna2344@gmail.com&su=Hello&body=I%20would%20like%20to%20connect"
                          target="_blank"
                          rel="noopener noreferrer"
                >mskrishna2344@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img className={styles.invertible} src={getImageUrl("assets/Contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a className={styles.a} href="https://www.linkedin.com/in/sai-krishna-m-rg/" target="_blank">linkedin.com/sai-krishna</a>
            </li>
            <li className={styles.link}>
                <img className={styles.invertible} src={getImageUrl("assets/Contact/githubIcon.png")} alt="Github Icon" />
                <a className={styles.a} href="https://github.com/saikrishna2344" target="_blank">github.com/sai-krishna</a>
            </li>
        </ul>
      <div className={styles.copyright}>
        Copyrights &copy; 2025 by Sai Krishna
      </div>
    </footer>
);
};

