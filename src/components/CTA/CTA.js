import React from "react";
import styles from "./cta.module.css";
const CTA = () => {
  return (
    <div className={styles.cta}>
      <h3 className={styles.ctaHeader}>Get your quotation today</h3>
      <div className={styles.buttonContainer}>
        <button className={styles.ctaQuote}>Quote Me</button>
        <button className={styles.ctaSales}>Contact Sales</button>
      </div>
    </div>
  );
};

export default CTA;
