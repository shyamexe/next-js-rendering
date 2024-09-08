"use client";
import { useState } from "react";

export const NavSearch=()=>{
    const [search,]=useState("");
    console.log('NavSearch rendered ${search}');
    return <div>Nav search input {search}</div>
}