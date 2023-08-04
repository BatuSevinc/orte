import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdClose } from "react-icons/md";
import {Qty} from "../index"
import styles from './CartItem.module.css'

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className={styles.cartItemContainer}>
      <div>
        <img src={item.image} alt={item.name} className={styles.cartItemImage} />
      </div>
      <div>
        <div>{item.name}</div>
        <div className={styles.cartItemContent}>
          <div className={styles.cartDescription}>
            {item.description.split(" ", 20).join(" ")}
            {item.description.split(" ").length > 20 && "..."}
          </div>
          <div
            onClick={() => removeFromCart(item.id)}
            className={styles.cartItemButtonContainer}
          >
            <div className={styles.cartItemButton}>
              <MdClose />
            </div>
          </div>
        </div>
        <div>
          <div>
          </div>
          <div>
            <div className={styles.itemQty}>
            <Qty item={item}/>
             <div> Toplam: {item.price * item.amount} TL{" "}</div>
              <span className={styles.cartItemUnitAmount}>
                {" "}
                ({item.amount} adet)
              </span>
            </div>
          </div>
          <div>
            <span className={styles.cartItemPrice}>Birim Fiyatı {item.price} TL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
