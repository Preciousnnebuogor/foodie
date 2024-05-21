import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type IProduct = {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}
type IStore = {
  cart: IProduct[]
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: number) => void
  // incrementQuantity: (productId: number) => void
  // decrementQuantity: (productId: number) => void

  clearCart: () => void
}

export const useProductStore = create(
  persist<IStore>(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const productInCart = state.cart.filter(
            (val) => val.id === product.id
          )

          if (productInCart.length > 0) {
            return { cart: state.cart }
          } else {
            return { cart: [...state.cart, product] }
          }
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const filteredProduct = state.cart.filter(
            (product) => product.id !== productId
          )

          // filteredProduct[0].image

          return {
            cart: filteredProduct,
          }
        }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "productStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
)


