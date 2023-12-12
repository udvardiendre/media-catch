"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
// import  {Cart as ShoppingCart} from "@/components/Cart"
// import { useLocalStorage } from "@/hooks/useLocalStorage"



type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string
  quantity: number
}

type ShoppingCartContext = {
  // openCart: () => void
  // closeCart: () => void
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  getItemQuantity: (id: string) => number
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCartData = async () => {
      if (typeof sessionStorage !== 'undefined') {
        const storedCartItems = sessionStorage.getItem("shopping-cart");
        console.log("Stored Cart Items:", storedCartItems);
        
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      }

      setLoading(false);
    };

    loadCartData();
  }, []);

  useEffect(() => {
    if (!loading) {
      sessionStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);



  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  // const openCart = () => setIsOpen(true)
  // const closeCart = () => setIsOpen(false)
  function getItemQuantity(id: string) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: string) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  

  return (
    <ShoppingCartContext.Provider
      value={{
        setCartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        // openCart,
        // closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      {/*<ShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  )
}