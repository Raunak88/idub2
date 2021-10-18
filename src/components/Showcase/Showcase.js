import React from "react";
import styles from "./showcase.module.css";
const Showcase = () => {
  return (
    <div className={styles.showContainer}>
      <div className={styles.showImage}></div>
      <div className={styles.descContainer}>
        <h3 className={styles.showHeader}>Showcase</h3>
        <p className={styles.showDesc}>
          Lorem ipsum dolor simit amet consectuer adipsing elit A lefind viverra
          nam libero tellus lucturs onare tuong pellenteesque jiget noren
        </p>
      </div>
    </div>
  );
};

export default Showcase;
