import { useState } from 'react';
import styles from './Global.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

const Header = ({ orders, setOrders }) => {
    let [cartOpen, setCartOpen] = useState(false)

    const removeCart = (index) => {
        const updatedOrders = orders.filter((order, i) => i !== index)
        setOrders(updatedOrders)
    }

    const cartSum = orders?.reduce(
        (accumulator, currentValue) => {
            const price = currentValue.price.replace(' ', '').replace('$', '')
            return accumulator + parseInt(price)
        },
        0
    ) || 0

    return (
        <>
            <header>
                <div>
                    <h1 className={styles.logo}><span style={{ color: 'red' }}>Prosthesis </span>Store</h1>

                    <ul className={styles.nav}>
                        <li>About</li>
                        <li>Conatcts</li>
                        <li>Room</li>
                    </ul>
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`${styles.shopCartButton} ${cartOpen && styles.active}`} />

                    {cartOpen && (
                        <div className={styles.shopCart}>
                            {orders.map((order, index) => (
                                <div className={styles.value} key={order.id}>{order.title} - <img className={styles.image} src={order.img} /> - {order.price} <FaTrash className={styles.deleteIcon} onClick={() => removeCart(index)} /></div>
                                
                            ))} 
                            <div>Total price: $ {cartSum}</div>
                        </div>
                    )}

                </div>

                <div className={styles.presentation}></div>
            </header>
        </>
    );
}

export default Header;