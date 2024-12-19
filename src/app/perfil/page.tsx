"use client"
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function Perfil() {

   const[name, setName] = useState();
   const[email, setEmail] = useState();
   const[contraseña, setContraseña] = useState();

    const registrarUsuario = async () => {
        const result = await createUserWithEmailAndPassword(auth, email, contraseña)
        console.log(result)
    }
    

    return (
        <>
            <h1>Aqui este es mi perfil</h1>
            <Link href={'/'}>Ir a home</Link>
            <div className="container">
                <h1 className="title">WELCOME RUIX</h1>
                <p className="subtitle">Welcome to Ruix. dashboard Community</p>

                <button className="google-button">Continue With Google</button>

                <div className="divider">
                    <hr className="line" />
                    <span className="or-text">Or</span>
                    <hr className="line" />
                </div>

                <form className="form">
                    <input type="text" placeholder="Name" className="input" />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input" />
                    <input onChange={(e) => setContraseña(e.target.value)} type="password" placeholder="Password" className="input" />

                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className="remember-text">Remember Me</label>
                    </div>

                    <button onClick={registrarUsuario} type="submit" className="register-button">Register</button>
                </form>

                <p className="login-text">
                    Already have an account? <Link href="/" className="login-link">Log in</Link>
                </p>
            </div>

        </>

    )
}
