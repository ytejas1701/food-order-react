import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import styles from './Appbar.module.css';

const Appbar = ({toggleCart})=>{
    const cartCtx = useContext(CartContext);
    const totalQuantity = cartCtx.items.reduce((cur, item)=>cur+item.quantity, 0); 
    return (
        <div className={styles.appbar}>
            <div className={styles.logo}>FoodApp</div>
                <div className={styles.cartIcon} onClick={totalQuantity>0?toggleCart:()=>{}}>
                    <svg
                        width="2rem"
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='white'>
                        <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                    </svg>
                    <div className={styles.quantity}>
                        {totalQuantity}
                    </div>
            </div>
        </div>
    );
}

export default Appbar;