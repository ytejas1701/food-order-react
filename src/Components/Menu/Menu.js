import styles from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = ()=>{
    return (
        <div className={styles.menu}>
            <MenuItem id="mi-01" title="Paneer Tikka" price="240"/>
            <MenuItem id="mi-02" title="Paneer Pakora" price="40"/>
            <MenuItem id="mi-03" title="Paneer Pasanda" price="120"/>
            <MenuItem id="mi-04" title="Paneer Butter Masala" price="160"/>
        </div>
    );
}

export default Menu;
