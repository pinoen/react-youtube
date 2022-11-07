// let arr = [
//     "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//    ]

// rafce - rafc

import { useState, useEffect } from "react"


const PruebasHooks = ( {contador, setContador} ) => {

    let arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   ]

    
    const [img, setImg ] = useState("")

    useEffect( ()=>{

       setImg(arr[contador])

    }, [contador] )
    
    console.log("Me ejecute tantas veces como se renderiza el componente")

  return (
    <div>
        <h4>{contador}</h4>
        <button onClick={ ()=> setContador( contador + 1 ) }>Aumentar</button>
        <button onClick={ ()=> setContador( contador - 1 ) }>disminuir</button>

        {/* <button onClick={()=> setImg("https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}>traer imagen</button> */}

        <img src={img} alt="" />
    </div>
  )
}

export default PruebasHooks
