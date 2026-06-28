import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Anjana working"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Experienced in building performant, accessible UIs with React,
                TypeScript, Angular and modern CSS, including AI-powered
                interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend &amp; Cloud Engineer</h3>
              <p>
                Skilled in Node.js REST APIs, Java Spring MVC, SQL &amp;
                MongoDB databases, and deploying on Azure, Render, and Vercel.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="AI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI &amp; Search Engineer</h3>
              <p>
                Integrating LLMs, OpenAI embeddings, and Pinecone vector
                databases to build intelligent semantic search and AI-powered
                features.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
