import React from "react";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroDesc}>
        <h3 className={styles.heroTitle}>
          Modern Interior for your Dream House
        </h3>
        <p className={styles.heroCaption}>
          we custom make design to suit your needs
        </p>
      </div>
      <div className={styles.coloredBanner}></div>
      <div className={styles.heroImg}></div>
    </div>
  );
};

export default Hero;
