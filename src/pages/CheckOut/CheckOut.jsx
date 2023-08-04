import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {CheckOutItem} from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from './CheckOut.module.css';


const CheckOut = () => {
  const { cart, productAmount, total, clearCart } = useContext(CartContext);

  const [discount, setDiscount] = useState(false);

  const discountAmount = 20;

  const handleClick = () => {
    setDiscount(true);
  };

  const handleConfirm = () => {
    const data = {
      products: cart,
      totalAmount: discountTotal,
    };

    axios
      .post(
        "https://firebase.google.com/1:581319746667:web:8cc93cc2afc24c953cbd2e",
        data
      )
      .then(() => {
        alert("Siparişiniz başarıyla gönderildi:");
        clearCart();
      })
      .catch((err) => {
        alert("Sipariş gönderilemedi. Lütfen daha sonra tekrar deneyiniz..");
      });
  };

  const discountTotal = discount ? total * (1 - discountAmount / 100) : total;

  return (
    <div className={styles.checkOut}>
      <div>
        <h3>Sepetim ({productAmount} ürün) </h3>
        <div className={styles.checkoutItem}>
          {cart.map((item) => {
            return <CheckOutItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div>
        {cart.length >= 1 && (
          <div>
            <div className={styles.cartTotal}>
              <h3>Toplam: </h3>
              <div>{parseFloat(discountTotal).toFixed(2)} TL</div>
              <button onClick={handleClick} className={styles.discountTotal}>
                {!discount ? "İndirim Kuponu Uygula" : "Kupon uygulandı"}
              </button>
            </div>
          </div>
        )}
        <div>
          {cart.length >= 1 ? (
            <div className={styles.cartTotalButtons}>
              <button onClick={() => clearCart()}>Hepsini sil</button>
              <Link>
                <button onClick={handleConfirm}>Sepeti Onayla</button>
              </Link>
            </div>
          ) : (
            <div className={styles.cartEmpty}>
              <div>Sepetiniz boş. Lütfen ürün ekleyiniz..</div>
              <Link to="/" className={styles.checkOutEmptyBack}>
                Ürün Listesine geri dön
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
