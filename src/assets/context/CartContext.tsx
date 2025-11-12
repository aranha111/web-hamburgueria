/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// ✅ CORREÇÃO DO TIPO:
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

// ✅ Cria o contexto com tipo
const CartContext = createContext<CartContextType | undefined>(undefined);

// ✅ Corrige o tipo ReactNode
interface CartProviderProps {
  children: ReactNode;
}

// ✅ O Provider que envolve a aplicação
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Hook personalizado para acessar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
