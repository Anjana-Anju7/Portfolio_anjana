import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2>Let&apos;s Connect</h2>
          <p>Open to opportunities — feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:anjanaedwin@gmail.com">anjanaedwin@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/anjana-e-s/" target="_blank" rel="noreferrer">
              linkedin.com/in/anjana-e-s
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/Anjana-Anju7" target="_blank" rel="noreferrer">
              github.com/Anjana-Anju7
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>© {new Date().getFullYear()} Anjana Edwin. All rights reserved.</p>
    </footer>
  );
};
