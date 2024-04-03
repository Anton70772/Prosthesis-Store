import { useState } from 'react';
import Footer from '../Footer.jsx';
import Header from '../Header.jsx';
import styles from './../Global.module.css'
import Items from './items.jsx';
import { prosthesis } from './prosthesis.data.js'

const Store = () => {
    const [orders, setOrders] = useState([]);

    const handleAddToCart = (prosthesis) => {
        if (!orders.some((order) => order.id === prosthesis.id)) {
            setOrders([...orders, prosthesis]);
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <Header orders={orders} setOrders={setOrders} />
                <Items prosthesis={prosthesis} onAddToCart={handleAddToCart} />
                <Footer />
            </div>
        </>
    );
}

export default Store;