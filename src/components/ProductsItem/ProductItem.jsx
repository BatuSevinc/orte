import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ProductsItem.module.css";
import { CartContext } from "../../context/CartContext";

const ProductItem = ({ product, index }) => {
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

  const isAddedToCart = cartItems.some((item) => item.id === product.id);

  return (
    <div key={index} className={styles.product}>
      <div className={styles.productImage}>
        <img src={product.image} alt={`images ${product.id2}`} />
      </div>
      <h1 className={styles.productName}>{product.name}</h1>
      <div className={styles.productDetails}>
        <p className={styles.productSize}>{product.size}</p>
        <p className={styles.productStock}>stokta {product.stock} adet</p>
      </div>
      <div className={styles.productDescription}>
        <h3>Ürün Hakkında</h3>
        <p>{product.description}</p>
      </div>
      <div className={styles.productPrice}>{product.price} TL</div>
      <button
        onClick={() => {
          if (isAddedToCart) {
            removeFromCart(product.id);
          } else {
            addToCart(product);
          }
        }}
        disabled={isAddedToCart}
      >
        {isAddedToCart ? ` Sepete Eklendi ` : "Sepete Ekle"}
        <FaShoppingCart style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default ProductItem;
