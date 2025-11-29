import AddToBascket from "@/app/components/AddToBascket";
import Container from "@/app/components/container";
import { IProductItemProps } from "@/app/components/productItem";
import { promises } from "dns";
import React from "react";

interface IProductProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{}>;
}


async function Product({ params }: IProductProps) {

    const { id } = await params;

    const result = await fetch(`http://localhost:3001/products/${id}`)

    const data = await result.json() as IProductItemProps

    return (
        <Container >
            <div className="grid grid-cols-12 shadow-md mt-8">
                <div className="col-span-3 rounded-3xl p-10 bg-gray-900">  
                    
                    <img className="rounded-3xl" src={data.image} />
                </div>

                <div className="col-span-9 p-9 rounded-3xl bg-gray-800 mx-5 mt-8">
                    <h2 className="font-bold text-2xl"> {data.title} </h2>
                    <p className="text-gray-500 my-4"> {data.description} </p>
                    <p className="font-bold">price : <span> {data.price}$ </span></p>

                    <AddToBascket id = {id}/>
                </div>

            </div>

        </Container>
    )
}
export default Product;