import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.greeting}>👋 Hello, I&apos;m</span>
        <h1 className={styles.title}>Anjana Edwin</h1>
        <p className={styles.description}>
          Experienced full-stack engineer with 3+ years of expertise in software
          design, frontend &amp; backend development — specialised in{" "}
          <strong>React, TypeScript, Node.js</strong> and{" "}
          <strong>Azure cloud</strong>. Skilled in AI, LLM &amp; Machine
          Learning, driving innovation and delivering high-quality solutions.
        </p>
        <div className={styles.ctaGroup}>
          <a href="mailto:anjanaedwin@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Anjana-Anju7"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/anjana-e-s/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.heroImgWrapper}>
        <img
          src={getImageUrl("hero/anjana.jpeg")}
          alt="Anjana Edwin — Full Stack Developer"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
