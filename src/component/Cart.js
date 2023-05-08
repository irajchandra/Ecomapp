import { Button, ListGroup, Row , Col ,Form} from "react-bootstrap"
import { CartState } from "../context/CartContext"
import { useEffect, useState } from "react"

const Cart = () => {
const {Cart, setCart  } = CartState()
const [Total , setTotal] = useState();

useEffect(()=>{
  setTotal(Cart.reduce((acc , curr) => acc + Number(curr.price*curr.quantity) , 0))
} )


const removeItem = (removeitem) => {
  const updatedCart = Cart.filter((item) => item.id !== removeitem.id);
  setCart(updatedCart);
};
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
        {
          Cart.map((item)=>(
           <ListGroup.Item  key={item.id}>
           <Row>
           <Col md={2} style={{width : 50}}>  <span>{item.title}</span></Col>
         
           <Col md={3}>  <span>{item.price}</span></Col>
           <Col md={3}>  <span>{item.quantity}</span></Col>
           <Col md={3}>  <Button onClick={()=> removeItem(item)}> Remove item </Button></Col>
            
         </Row>
           </ListGroup.Item>
          
          
          ))
        }
        
        </ListGroup>
      </div>
      <div className="checkout">
      <span> SubTotal ({Cart.length}) Items</span>
      <span style={{fontWeight:700 , fontSize:20}}>Total : Rs.{Total}</span>
      <Button type="button" disabled ={Cart.length === 0}> Proceeds To Payment</Button>
      </div>
    
    </div>
  )
}

export default Cart