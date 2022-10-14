import { useState, useReducer } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Menu from './Components/Menu/Menu';
import Appbar from './Components/UI/Appbar';
import CartContext from './Context/CartContext';
import bgImage from './assets/bg-image.jpg';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const increaseQuantityHandler =(item)=>{
    setItems((prev)=>{
      const itemIndex = prev.findIndex(({id})=>id===item.id);
      if(itemIndex===-1){
        return prev.concat({...item, quantity:1});
      }
      prev[itemIndex].quantity++;
      return [...prev];
    })
  }

  const decreaseQuantityHandler = (id)=>{
    setItems((prev)=>{
      const itemIndex = prev.findIndex((curItem)=>curItem.id===id);
      prev[itemIndex].quantity--;
      return prev.filter((curItem)=>curItem.quantity>0);
    })
  }

  const emptyCartHandler = ()=>{
    setItems([]);
  }

  return (
    <CartContext.Provider value={{
      items,
      increaseQuantity: increaseQuantityHandler,
      decreaseQuantity: decreaseQuantityHandler,
      emptyCart: emptyCartHandler,
      }}>
      <img src={bgImage} alt='blah'/>
      <Appbar toggleCart={()=>{setShowCart((prev)=>(prev^1))}}/>
      {showCart&&<Cart toggleCart={()=>{setShowCart((prev)=>(!prev))}}/>}
      {!showCart&&<Menu/>}
    </CartContext.Provider>
  );
}

export default App;
