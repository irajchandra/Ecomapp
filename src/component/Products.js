import { Button, Card } from "react-bootstrap"


const Products = ({prod} , ) => {
 
const {item  ,Cart , setCart} = prod ;



const addToCart = (items) => {
  console.log("added items" ,items)
  if(!Cart.length){
    const FirstcartItem = [...Cart, { ...items, quantity: 1 }]
    setCart(FirstcartItem);
  }
  else{
      const existingItemIndex = Cart.findIndex((item) => item.id === items.id);
      console.log("index value " ,existingItemIndex)
      if (existingItemIndex !== -1) {
        const updatedCart = [...Cart];
        updatedCart[existingItemIndex].quantity += 1;
        console.log('updateitem ' , updatedCart)
        setCart(updatedCart);
      }
      else{
        const NewItem = [...Cart, { ...items, quantity: 1 }]
    setCart(NewItem);
      }
 
};
console.log("my cart items " , Cart)
}

  

  return (
    <div className="products">
    <Card>
        <Card.Img variant="top"  src={item.image} alt={item.title}/>
        <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle style={{paddingBottom : 10}}>
        <span>Rs. {item.price}</span>
        <div>Rating : {item.rating.rate}</div>
        
        </Card.Subtitle>
       
        <Button onClick={()=>addToCart(item)}> Add to Cart </Button>
      
        
        </Card.Body>
    </Card>
    </div>
  )
}

export default Products