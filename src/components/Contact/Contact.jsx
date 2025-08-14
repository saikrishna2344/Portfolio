import React from "react";
import styles from "./Contact.module.css";

// ✅ Import images directly from lowercase "contact" folder
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  // 🟡 Temp debug style for icons
  const iconStyle = {
     // Light red for debugging
    width: "30px",
    height: "30px",
    objectFit: "contain",
    borderRadius: "6px",
  };

  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.invertible} src={emailIcon} alt="Email Icon" style={iconStyle} />
          <a
            className={styles.a}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mskrishna2344@gmail.com&su=Hello&body=I%20would%20like%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            mskrishna2344@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.invertible} src={linkedinIcon} alt="LinkedIn Icon" style={iconStyle} />
          <a
            className={styles.a}
            href="https://www.linkedin.com/in/sai-krishna-m-rg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/sai-krishna
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.invertible} src={githubIcon} alt="GitHub Icon" style={iconStyle} />
          <a
            className={styles.a}
            href="https://github.com/saikrishna2344"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/sai-krishna
          </a>
        </li>
      </ul>
      <div className={styles.copyright}>
        Copyrights &copy; 2025 by Sai Krishna
      </div>
    </footer>
  );
};
