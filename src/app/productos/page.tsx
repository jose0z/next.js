import Image from "next/image";

export default async function Page() {
    const data = await fetch('https://fakestoreapi.com/products');
    const productos = await data.json();

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-10 text-gray-800">
                Página de Productos
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
                {
                    productos.map((producto) => (
                        <div key={producto.id} className="border rounded-lg p-4 shadow-md bg-white w-60">
                            <div className="w-full flex justify-center mb-4">
                                <Image 
                                    src={producto.image} 
                                    width={200} 
                                    height={200} 
                                    alt={producto.title} 
                                    className="object-contain"
                                />
                            </div>
                            {/* Mostramos el título del producto correctamente */}
                            <h2 className="text-xl font-semibold text-center text-gray-800">{producto.title}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
