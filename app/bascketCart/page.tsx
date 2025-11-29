"use client"

import React, { useEffect, useState } from "react";
import Container from "../components/container";
import BascketCartItem from "../components/bascketcartItem";
import { useshopContextBascket } from "../context/shopContextBascket";
import { IProductItemProps } from "../components/productItem";
import axios from "axios";
import { formatNumber } from "../utils/number";

interface IDiscount {
    id: number,
    code: string,
    precntage: number
}

function BascketCart() {

    const { cartItem } = useshopContextBascket();
    const [data, setData] = useState<IProductItemProps[]>([]);
    const [Discount, setDiscount] = useState("")
    const [finalPrice, setfinalPrice] = useState(0)
    const [discountPrice, setdiscountPrice] = useState(0)

    useEffect(() => {
        axios(`http://localhost:3001/products`).then(result => {
            const { data } = result;
            setData(data)
        })
    }, []);
    let totalPrice = cartItem.reduce((total, item) => {
        let selectedProduct = data.find((product) => product.id == item.id.toString())

        return total + (selectedProduct?.price || 0) * item.qty
    }, 0)

    const handleSubmitDiscount = () => {
        axios(`http://localhost:3001/discount?code=${Discount}`).then(
            (result) => {
                const data = result.data as IDiscount[];
                let discountPrice = totalPrice * data[0].precntage / 100;
                let finalPrice = totalPrice - discountPrice
                setdiscountPrice(finalPrice)
                setfinalPrice(discountPrice)
            }
        )
    }

    return (
        <Container>
            <h1 className="my-4">Bascket</h1>


            <div className="">
                {
                    cartItem.map(item => (
                        <BascketCartItem key={item.id} {...item} />
                    ))
                }


            </div>


            <div className="rounded-3xl bg-gray-800 p-7 mr-4">
                <div className="bg-sky-950 rounded-2xl p-4">
                    <h3>Whole Price : <span>
                        {formatNumber(totalPrice)} $

                    </span></h3>
                    <h3>Discount : <span> {discountPrice}$</span></h3>
                    <h3>Final Price : <span> {finalPrice} $</span></h3>
                </div>


                <div className="bg-gray-600 rounded-2xl my-7">
                    <button className="bg-sky-900 rounded-xl p-2 
                    my-5 mx-5 text-white "
                        onClick={handleSubmitDiscount}
                    >Discount</button>

                    <input className="p-2 border-gray-500"
                        placeholder="Write your discount code" type="text"
                        onChange={(e) => setDiscount(e.target.value)}
                    >

                    </input>
                </div>
            </div>



        </Container>
    )
}
export default BascketCart;