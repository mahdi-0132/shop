"use client"
import React from 'react'
import { useshopContextBascket } from '../context/shopContextBascket'

interface IAddToCartProps{
    id:string,
}

function AddToBascket({id}: IAddToCartProps) {
    
    const {cartItem ,handleIncreaseProductQty , getProductQty ,handleDicreaseProductQty,handleDeleteProductQty } = useshopContextBascket()
    console.log(cartItem)
    return (
        <div>
            <div className="mt-28">
            <button onClick={()=>handleIncreaseProductQty(parseInt(id))}
             className="bg-gray-600 rounded px-4 py-2 text-white">+</button>
            <span className="mx-4"> {getProductQty(parseInt(id))} </span>
            <button onClick={() => handleDicreaseProductQty(parseInt(id))} className="bg-gray-400 rounded font-bold px-4 py-2 text-black">-</button>
        </div>
        <button onClick={()=> handleDeleteProductQty (parseInt(id))} className="bg-gray-300 rounded-2xl p-3 my-6 mx-5 text-gray-700">Delete All</button>
        </div>
    )
}

export default AddToBascket