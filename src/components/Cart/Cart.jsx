import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {CartItem} from "../index";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from './Cart.module.css';

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <div onClick={() => setIsOpen(false)} className={styles.closeIcon}>
          <MdClose size={20} className={styles.icon} />
        </div>
        <div className={styles.cartItem}>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div>
        {cart.length >= 1 && (
          <div>
            <div className={styles.cartTotal}>
              <h3>Toplam: </h3>
              <div>{parseFloat(total)} TL</div>
            </div>
          </div>
        )}
        <div>
          {cart.length >= 1 ? (
            <div className={styles.cartTotalButtons}>
              <button onClick={() => clearCart()}>Hepsini sil</button>
              <Link to="/checkout">
                <button>Satın al</button>
              </Link>
            </div>
          ) : (
            <div className={styles.cartEmpty}>
              <div>Sepetiniz boş. Lütfen ürün ekleyiniz..</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
