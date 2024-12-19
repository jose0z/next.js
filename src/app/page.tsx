import Link from "next/link";

export default function Home(){
  return(
    <>
    <h1>Hola!!</h1>
    <Link href={'/perfil'}>Ir a mi perfil</Link>
    
   
    </>
  )
}