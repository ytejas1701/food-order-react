import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import styles from './MenuItem.module.css';

const MenuItem = ({id, title, price})=>{
    const cartCtx = useContext(CartContext);
    const increaseQuantity = ()=>{
        cartCtx.increaseQuantity({id, title, price});
    }
    const decreaseQuantity = ()=>{
        isEnabled&&cartCtx.decreaseQuantity(id);
    }
    const item = cartCtx.items.find((item)=>item.id===id);
    const quantity = item===undefined?0:item.quantity;
    const isEnabled = quantity===0?false:true;

    return (
        <div className={styles.menuItem}>
            <div className={styles.iteamDescription}>
                <div className={styles.itemTitle}>
                    {title}
                </div>
                <div className={styles.itemPrice}>
                    ₹{price}
                </div>
            </div>
            <div className={styles.itemQuantity}>
                    <svg
                        width="2rem"
                        viewBox='0 0 20 20'
                        fill='black'
                        onClick={decreaseQuantity}>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>                    
                    </svg>
                <div className={styles.quantity}>
                    {quantity}
                </div>
                <svg
                        width="2rem"
                        viewBox='0 0 20 20'
                        fill='black'
                        onClick={increaseQuantity}>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>                    </svg>
            </div>
        </div>
    );
}

export default MenuItem;
