"use client"
import React, { ChangeEvent, useState } from 'react'
import Container from '../components/container'
import axios from 'axios'

function Admin() {
    const [newProduct , setNewProduct] = useState({
        title : "",
        price : "" ,
        image : "" ,
        discription : "" ,
    })

const handleChangeProduct = (e:ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) =>{
 const { value , name } = e.target    
 
 setNewProduct ({
    ...newProduct,
    [name]: value,
 })
}
const handleCreateProduct = ()=>{
axios({
    method : "POST",
    url : "http://localhost:3001/products",
    data :{
        "id": Math.floor(Math.random()* 1000).toString() ,
            "image":newProduct.image ,
            "title":newProduct.title ,
            "description":newProduct.discription ,
            "price": newProduct.price, 
    }
})
}


    return (
        <div className='bg-gray-800 rounded-2xl'>
            <Container>
                <div className='grid grid-cols-3 gap-4 p-12'>
                    <input onChange={handleChangeProduct} name='title' className='p-3' type="text" placeholder="Title" />
                    <input onChange={handleChangeProduct} name='price' className='p-3' type="text" placeholder="Price" />
                    <input onChange={handleChangeProduct} name='image' className='p-3' type="text" placeholder="Image" />
                </div>
                <textarea onChange={handleChangeProduct} name='discription' className='w-full mb-7 p-6' placeholder="Discription" />
                <button onClick={handleCreateProduct} className=' bg-gray-500 py-2 px-4 rounded-xl mb-6'>Create New Product</button>
            </Container>
        </div>
    )
}

export default Admin