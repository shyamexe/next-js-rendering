"use client";
import { useState } from "react";

export const ClientComponentTwo= () =>{
    const [name ]= useState("Batman");
    return <h1> Client component two {name}</h1>
}