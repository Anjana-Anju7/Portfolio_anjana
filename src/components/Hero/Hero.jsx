import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anjana</h1>
        <p className={styles.description}>
          I'm a full-stack developer with nearly 2 years of experience using React, Angular, Java and
          NodeJS. 
        <p>Reach out if you'd like to learn more!</p>
        </p>
        {/* <p className={styles.description}>Reach out if you'd like to learn more!</p> */}
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/anjana.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
