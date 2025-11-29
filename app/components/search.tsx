"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

function Search() {

const searchParams = useSearchParams()
const router = useRouter()
const [search , setSearch] = useState("")

const handleSearch = ()=>{

  const currentSearchParams = new URLSearchParams(searchParams.toString())
  
  currentSearchParams.set("title", search)
  router.push(`/store?${currentSearchParams.toString()}`)
}

  return (
    <div className="mb-4 my-4">
        <button onClick={handleSearch} className="bg-gray-500 rounded-xl p-2 mx-5">Search</button>
        <input onChange= {(e) => setSearch(e.target.value)} type="text" placeholder="Search what you looking for" className="py-2 px-24 "/>
        
    </div>
  )
}

export default Search