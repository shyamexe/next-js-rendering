"use client";
import { useState } from "react"; 

export const ClientComponentOne = ({children}:{
    children: React.ReactNode
}) => {
    const [name] = useState("Batman");
    return (<> <h1> Client component one {name}</h1> 
    {children}
    </>)};
