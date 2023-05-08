import { createContext, useContext, useEffect,  useState } from 'react';


const CartContext = createContext();

function CartContextProvider({ children }) {
  const [ProData , setProData]= useState([])
  const [Cart , setCart]= useState([])


const FetchData= async ()=>{
  return  await fetch("https://fakestoreapi.com/products").then(res=>res.json()).then((data)=> setProData(data)

  )
}
useEffect(()=>{FetchData();
  },[])
  
 







  return (
    <CartContext.Provider  value={{ProData ,Cart, setCart ,setProData}}>
    {children}
    </CartContext.Provider>
    )

  }

  export    {CartContextProvider ,CartContext} ;


  export const CartState =() =>{
   
return   useContext(CartContext)

  }