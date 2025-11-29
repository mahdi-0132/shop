import React, { Children } from "react";
import Navbar from "./Nabar";

interface ILayoutProps{
    children : React.ReactNode
}

function Layout ({children} : ILayoutProps){
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}
export default Layout;