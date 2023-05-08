import { CartState } from "../context/CartContext"
import Products from "./Products";
import './styles.css'

const Home = () => {

  const { ProData ,Cart,setCart ,setProData } = CartState() ;
  console.log("home data " ,ProData )
  return (
    <div  className="home">
    <div className="productContainer">
    {ProData.map((item)=> {return <span> <Products  prod={{item  ,Cart , setCart , setProData}}  key={item.id}/></span>})}
    </div>
    </div>
  )
}

export default Home