"use client"
import React from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import Container from "./container";
import { useshopContextBascket } from "../context/shopContextBascket";
import Cookies from "js-cookie"
function Navbar() {

    const pathName = usePathname()
    const { cartTotalQty } = useshopContextBascket()

    const navLinks = [
        {
            href: "/",
            title: "Home",
        },
        {
            href: "/store",
            title: "Store",
        },
        {
            href: "/panelAdmin",
            title: "Admin",
        },
        {
            href: "/login",
            title: "Login",

        }
    ]


    return (
        <nav className="shadow-md p-4">
            <Container>
                <div className=" flex justify-between">
                    <div>
                        {navLinks.map((item) => (
                            <Link key={item.href} className={` mr-4 ${pathName === item.href ? "text-gray-400" : ""} `}
                                href={item.href}> {item.title}
                            </Link>
                        ))}
                    </div>


                    <div>
                        <span> {cartTotalQty} </span>

                        <Link href="/bascketCart">Bascket</Link>
                        <button onClick={()=> {
                            Cookies.remove("tokrn")
                            redirect("/")
                        }} 
                        className="ml-4 text-red-600">Exit</button>
                    </div>
                </div>

            </Container>
        </nav>


    );
}
export default Navbar;