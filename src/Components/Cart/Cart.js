import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({toggleCart})=>{
    const {items, emptyCart} = useContext(CartContext);
    const totalAmount = items.reduce((cur, {price, quantity})=>{return cur+price*quantity}, 0)
    const placeOrderHandler = ()=>{
        console.log('ordering...')
        emptyCart();
        toggleCart();
    }
    return (
        <div className={styles.cart}>
            {items.map((item)=>
            <CartItem
                key={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}/>)}
            <hr/>
            <div className={styles.totalAmount}>₹{totalAmount}</div>
            <hr/>
            <div className={styles.actions}>
                <button className={styles.placeOrder} onClick={placeOrderHandler}>Place Order</button>
                <button className={styles.cancel} onClick={toggleCart}>Cancel</button>
            </div>
        </div>
    );
}

export default Cart;