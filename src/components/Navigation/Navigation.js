import React from "react";
import styles from "./navigation.module.css";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navigation = () => {
  const pages = ["Home", "About", "Products", "Contact"];
  return (
    <div className={styles.navContainer}>
      <h1 className={styles.brandTitle}>SHPX</h1>
      <ul className={styles.navList}>
        {pages.map((page, index) => (
          <li className={styles.navItem} key={index}>
            {page}
          </li>
        ))}
      </ul>
      <div className={styles.sideNav}>
        <span className={styles.icon}>
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <div className={styles.hamburger}>
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
    </div>
  );
};

export default Navigation;
