"use client"
import { createContext, useContext, useEffect, useEffectEvent, useState } from "react";

interface ShopContextBascketProviderProps {
    children: React.ReactNode
}
interface CartItem {
    id: number,
    qty: number,
};

interface TshopContextBascket {
    cartItem: CartItem[];
    handleIncreaseProductQty:(id : number) => void;
    handleDicreaseProductQty : (id : number) => void;
    getProductQty : (id : number) => number;
    cartTotalQty : number;
    handleDeleteProductQty : (id : number)=> void;
}

const shopContextBascket = createContext({} as TshopContextBascket)

export const useshopContextBascket = () => {
    return useContext(shopContextBascket)
}

export function ShopContextBascketProvider({ children }: ShopContextBascketProviderProps) {
    const [cartItem, setCartItem] = useState<CartItem[]>([])


const cartTotalQty = cartItem.reduce( (totalQty ,item )=> {
    return totalQty + item.qty
} , 0 )


const getProductQty = (id : number)=>{
    return cartItem.find(item=> item.id == id)?.qty || 0
}

    const handleIncreaseProductQty = (id: number) => {
        setCartItem((currentItem) => {
            let isProductExsit = currentItem.find(item => item.id == id) == null

            if (isProductExsit) {
                return [...currentItem, { id: id, qty: 1 }]
            }
            else {
                return (
                    currentItem.map(item => {
                        if (item.id == id) {
                            return {
                                ...item,
                                qty: item.qty + 1
                            }
                        } else {
                            return item;
                        }
                    })
                )
            }
        })
    }



const handleDicreaseProductQty = (id : number) => {
    setCartItem(currentItem =>{
        let productExistOrLastOne = currentItem.find(item => item.id == id)?.qty == 1
        if (productExistOrLastOne) {
        return currentItem.filter(item => item.id != id)
        }else {
            return currentItem.map(item =>{
                if(item.id ==id){
                    return {
                        ...item,
                        qty :item.qty - 1
                    }
                }else {
                    return item
                }
                    
            })
        }
    })
}



const handleDeleteProductQty = (id : number) => {{
    setCartItem (currentItem  => {
        return currentItem.filter(item => item.id != id)
    })
}}


useEffect (() => {
    const storedCartItem = localStorage.getItem("cartItem")

    if(storedCartItem){
        setCartItem( JSON.parse(storedCartItem))
    }

} , [])

useEffect (() =>{
    localStorage.setItem("cartItem" , JSON.stringify(cartItem))
}, [cartItem])

    return (
        <shopContextBascket.Provider value={{ cartItem,handleIncreaseProductQty , getProductQty , cartTotalQty,handleDicreaseProductQty , handleDeleteProductQty  }}>
            {children}
        </shopContextBascket.Provider>
    )
}
export default ShopContextBascketProvider;
