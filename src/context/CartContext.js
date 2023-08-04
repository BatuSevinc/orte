import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  const addToCart = (product) => {
    const productID = parseInt(product.id);
    const existingProduct = cart.find((item) => item.id === productID);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === productID ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setCartItems([]);
    setAddedToCart({});
  };

  useEffect(() => {
    const amount = cart.reduce((a, c) => a + c.amount, 0);
    const total = cart.reduce((a, c) => a + c.price * c.amount, 0);
    setProductAmount(amount);
    setTotal(total);
  }, [cart]);

  const [productAmount, setProductAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value) || value < 1) {
            return { ...item, amount: 1 };
          } else {
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
      setIsOpen(true);
    }
  };

  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setProductAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        productAmount,
        total,
        clearCart,
        handleInput,
        handleSelect,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
