import React from "react";
import styles from "./Hero.module.css" 
import { getImageUrl } from "../../util";

export const Hero = () => {
    return (<section className={styles.container}>
      <div className={styles.content}>
        <h1 className ={styles.title}>Hi, I'm Sai Krishna</h1>
        <p className={styles.description}>I'm a fresher working as an Application Engineer, gaining hands-on experience in full-stack development using React for the front end and Python for the backend.
        I'm eager to keep learning and building real-world applications that solve real problems.</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mskrishna2344@gmail.com&su=Hello&body=I%20would%20like%20to%20connect"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}>
          Contact Me
        </a>

      </div>
      <img src={getImageUrl("assets/hero/mypic.png")} alt="Image of me" className = {styles.heroimg}/>
      <div className ={styles.topBlur}/>
      <div className ={styles.bottomBlur}/>
    </section>
  )
}