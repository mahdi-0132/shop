import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IProductItemProps } from './productItem';
import AddToBascket from './AddToBascket';

interface IBascketCartItemProps{
    id:number,
    qty :number,
}


function BascketCartItem ( {id ,qty} : IBascketCartItemProps ) {

    const [ data , setData] = useState({} as IProductItemProps)

useEffect (()=>{
        axios(`http://localhost:3001/products/${id}`).then(result =>{
            const { data } = result
            setData(data)
        })
}, [])

    return (
       <div className="grid grid-cols-12 mb-4">
                    <div className="col-span-3 rounded-3xl p-10 bg-gray-900">
                        <img src= {data.image}></img>
                    </div>
                    <div className="col-span-9 p-9 rounded-3xl bg-gray-800 mx-5 mt-4">
                        <h2 className="font-bold text-2xl"> {data.title} </h2>
                        <p>Number of the Product : <span className="text-red-500"> {qty} </span></p>
                        <p className="font-bold">price : <span> {data.price} $</span></p>

                        <div className="mt-28">
                          <AddToBascket id= {id.toString()} />
                        </div>
                    </div>
                </div>
   )
}

export default BascketCartItem;