import React, { useContext } from 'react';
import { Cart } from '../index';
import { CartContext } from '../../context/CartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './Header.module.css';

const Header = () => {
  const { isOpen, setIsOpen, productAmount } = useContext(CartContext);

  return (
    <div className={styles.header}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.headerCartButton} 
      >
        <AiOutlineShoppingCart size={30} />
        {productAmount > 0 && <div>{productAmount}</div>}
      </div>
      <div
        className={`${isOpen ? styles.isOpenTrue : styles.isOpenFalse} ${
          styles.headerCart
        }`}
      >
        <Cart />
      </div>
    </div>
  );
};

export default Header;
