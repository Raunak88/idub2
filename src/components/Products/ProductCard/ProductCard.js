import React from "react";
import styles from "./product-card.module.css";
import chair1 from "../../../assets/chair1.png";
import chair2 from "../../../assets/chair2.png";
import product1 from "../../../assets/product1.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";

const ProductCard = () => {
  const images = [chair1, chair2, product1, product2, product3, product4];
  return (
    <div className={styles.productContainer}>
      {images.map((image, index) => (
        <div className={styles.productContent}>
          <h3 className={styles.productHeader}>Chaise Molle</h3>
          <h6 className={styles.productPrice}>$18.0</h6>
          <img src={image} className={styles.productImage} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
