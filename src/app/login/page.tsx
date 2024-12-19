"use client"

import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function Page() {
    const [email, setEmail] = useState()
    const [contraseña, setContraseña] = useState()
    const router = useRouter()

    const iniciarSesion = async () => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, contraseña)
            alert("Exito! puede pasar")
            router.push('/')
        } catch (error) {
            alert(error)
        }
    }
    const registrarseconGoogle = async () => {
        const provider= new GoogleAuthProvider()
        const result= await signInWithPopup (auth, provider);
        console.log ("result")
    }
    return (
        <div>
            <input onChange={(e) => setEmail(e.target.value)} type="text"
                placeholder="email" />
            <input onChange={(e) => setContraseña(e.target.value)} type="text"
                placeholder="contraseña" />
            <button onClick={iniciarSesion}>Iniciar sesion</button>
            <button onClick={registrarseconGoogle}>registrate con Google</button>
        </div>
    )
}