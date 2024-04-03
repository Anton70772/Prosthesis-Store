import styles from './../Global.module.css'
import ProsthesisItem from "./ProsthesisItem";

const Items = ({ prosthesis, onAddToCart }) => {
    return (
        <>
            <div className={styles.main}>
                {prosthesis.map(prosthesis => (
                    <ProsthesisItem key={prosthesis.id} prosthesis={prosthesis} onAddToCart={() => onAddToCart(prosthesis)} />
                ))}
            </div>
        </>
    );
}

export default Items;