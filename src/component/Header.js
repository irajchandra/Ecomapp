import { Container,  Navbar ,Nav, Dropdown , Badge, Button, NavLink} from "react-bootstrap" ;
import {FaShoppingCart} from "react-icons/fa"
import { CartState } from "../context/CartContext";
import { Link } from "react-router-dom";


const Header = () => {
  const { Cart,setCart } = CartState() ;


  const removeItem = (removeitem) => {
    const updatedCart = Cart.filter((item) => item.id !== removeitem.id);
    setCart(updatedCart);
  };



  return (
    <Navbar bg="dark"  variant="dark" style={{height:80}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">EcomApp </Link>
        </Navbar.Brand>

        <Nav bg="dark"  variant="dark"  style={{marginRight:200}}>
          <Dropdown   >
               <Dropdown.Toggle   variant="success" > 
               <FaShoppingCart color="white" fontSize="25px"/>       
               <Badge bg="green">{Cart.length}</Badge>          
          </Dropdown.Toggle>
          <Dropdown.Menu  style={{minWidth: 350}} >
          { Cart.length>0 ? (
            <>
            {Cart.map((myitem)=>(
              <span className="cartItem" key={myitem.id}>
              <img
              src={myitem.image}
              className="cartItemImg"
              alt={myitem.title}
              />
              <div className="cartItemDetial">
              <span>{myitem.title}</span>
              <span>Rs.{myitem.price}</span>
              </div>
              <Button onClick={()=> removeItem(myitem)}> Remove item </Button> 
              
              </span>
              ))}
              <div className="gotocart"> 
              <Link to="/cart">
              <Button >CheckOut</Button>
              </Link>
              </div>
             
          
            </>
          ) :(<span style={{padding : 10}}> cart is empty</span>)}
          

          </Dropdown.Menu>

        </Dropdown>
      
      </Nav>      


      </Container>
    </Navbar>
  )
}

export default Header