"use client"
import { db } from "@/firebase/config"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"

export default function page (){
    const [producto, setProducto] = useState()
    const agregar = async () => {
        try{
            const newDoc = await addDoc(collection(db,'productos'), {
                nombre: producto,

            });
            console.log(newDoc)
        } catch (err) {
            console.error("writeToDB failed. reason :", err)
        }
    }
    return(
        <>
        <h1>agregar</h1>
        <input className="border border-black" onChange={(e) => setProducto(e.target.value)} type="text" />
        <button onClick={()=>agregar()}>Agregar</button>
        </>
    )
}