import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext()

function ContextProvider({children}) {

    const [count,setCount] = useState(0)
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)
    const [selectedItem,setSelectedItem] = useState({})
    const [cartProducts,setCartProducts] = useState([])

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const addToCart = (product) => setCartProducts([...cartProducts, product]);
    const removeFromCart = (productId) => {
        setCartProducts(cartProducts.filter(product => product.id !== productId));
      };

      useEffect(()=>{
        console.log(cartProducts)
      },[cartProducts])

    return (
        <Context.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            selectedItem,
            setSelectedItem,
            cartProducts,
            addToCart,
            removeFromCart
            }}>
            {children}
        </Context.Provider>
      );
}


export {ContextProvider,Context}