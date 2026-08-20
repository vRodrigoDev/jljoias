"use client";

import React, { createContext, useContext, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  size?: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (id: string, size?: string) => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  subtotal: number;
  pixTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (newItem: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const qtyToAdd = newItem.quantity || 1;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qtyToAdd,
        };
        return updated;
      }

      return [...prev, { ...newItem, quantity: qtyToAdd }];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, size?: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const pixTotal = subtotal * 0.95;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        openCart,
        closeCart,
        totalItems,
        subtotal,
        pixTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart precisa ser usado dentro de um CartProvider");
  }
  return context;
}