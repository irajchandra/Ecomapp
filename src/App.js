


import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from  './component/Home'
import Cart from './component/Cart'

function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/cart'  element={<Cart/>} /> 
    </Routes>
    
    </BrowserRouter>
   
       
    </div>
    
  
     
          
     
   
 
    
    
   
   
      
                  
            
     
  );
}

export default App;
