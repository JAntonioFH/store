import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext()

function ContextProvider({children}) {

    const [count,setCount] = useState(0)
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)
    const [selectedItem,setSelectedItem] = useState({})

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)



    useEffect(()=>{
        console.log(isProductDetailOpen)
        console.log(selectedItem)
    },[isProductDetailOpen,selectedItem])
    return (
        <Context.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            selectedItem,
            setSelectedItem
            }}>
            {children}
        </Context.Provider>
      );
}


export {ContextProvider,Context}