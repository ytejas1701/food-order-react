import styles from './CartItem.module.css';

const CartItem = ({title, price, quantity})=>{
    return (
        <div className={styles.cartItem}>
            <span className={styles.title}>{title}</span>
            <span className={styles.amount}>₹{price} x {quantity} = ₹{price*quantity}</span>
        </div>
    );
}

export default CartItem;