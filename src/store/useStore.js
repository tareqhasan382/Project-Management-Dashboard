// import { toast } from "react-toastify";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCart = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addItem: (data) => {
        const { item, quantity, color, size } = data;
        const currentItems = get().cartItems;
        const isExisting = currentItems.find(
          (cartItem) => cartItem.item._id === item._id
        );

        if (isExisting) {
          return alert("Item already in cart");
        }

        set({ cartItems: [...currentItems, { item, quantity, color, size }] });
        alert("Item added to cart", { icon: "🛒" });
      },
      removeItem: (idToRemove) => {
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );
        set({ cartItems: newCartItems });
        alert("Item removed from cart");
      },
      increaseQuantity: (idToIncrease) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        alert("Item quantity increased");
      },
      decreaseQuantity: (idToDecrease) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        alert("Item quantity decreased");
      },
      // clearCart: () => set({ cartItems: [] }),
      clearCart: () => {
        const currentItems = get().cartItems;

        if (currentItems.length === 0) {
          return;
        }

        set({ cartItems: [] });
        alert("Cart cleared");
      },
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
