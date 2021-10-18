import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import styles from "./products.module.css";
const Products = () => {
  const tabs = ["All", "Lamp", "Chair", "Table", "Sofa"];
  return (
    <div className={styles.productContainer}>
      <h3 className={styles.header}>Products</h3>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <span key={index}>{tab}</span>
        ))}
      </div>
      <div className={styles.productCard}>
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
