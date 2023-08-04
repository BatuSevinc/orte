import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdClose } from "react-icons/md";
import styles from "./CheckOutItem.module.css";

const CheckOutItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className={styles.checkOutItemContainer}>
      <div>
        <img
          src={item.image}
          alt={item.name}
          className={styles.checkOutItemImage}
        />
      </div>
      <div>
        <h2>{item.name}</h2>
        <div className={styles.checkOutItemContent}>
          <div className={styles.checkOutDescription}>
            {item.description.split(" ", 50).join(" ")}
            {item.description.split(" ").length > 50 && "..."}
          </div>
          <div
            onClick={() => removeFromCart(item.id)}
            className={styles.checkOutItemButtonContainer}
          >
            <div className={styles.checkOutItemButton}>
              <MdClose size={30} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.checkOutItemPrice}>
            <h4>
              Toplam: {item.price * item.amount} TL{" "}
              <span> ({item.amount} adet)</span>
            </h4>
          </div>
          <div>
            <span className={styles.checkOutItemUnitPrice}>
              Birim fiyatı {item.price} TL
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CheckOutItem;
