import React from "react"
import Container from "../components/container";
import ProductItem, { IProductItemProps, IProductList } from "../components/productItem";
import Link from "next/link";
import { link } from "fs";
import { promises } from "dns";
import Paginatoin from "../components/Paginatoin";
import Search from "../components/search";

interface IStoreProps{
    params : Promise <{}> ;
    searchParams : Promise <{ page : string ; per_Page : string ; title : string}>
}

async function Store({searchParams} : IStoreProps) {

    const page = (await searchParams).page?? "1"
    const per_page = (await searchParams).per_Page?? "5" 
    const title = (await searchParams).title?? "" 

    const result = await fetch(`http://localhost:3001/products?_page=${page}&_per_page=${per_page}&title=${title}`)
    const data = await result.json() as IProductList




    return (

        <Container>
            <h1 className="py-4">Store</h1>
            <Search/>
            <div className="grid grid-cols-4 gap-4">
                {
                    data.data.map((item) => (
                        <Link key={item.id} href={`/store/${item.id}`}>
                            <ProductItem  {...item} />
                        </Link>

                    ))}
            </div>
            <Paginatoin pageCount={data.pages}/>
        </Container>

    )
}
export default Store;