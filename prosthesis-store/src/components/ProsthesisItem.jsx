import styles from './../Global.module.css'

const ProsthesisItem = ({ prosthesis, onAddToCart }) => {
    return (
        <>
            <div key={prosthesis.id} className={styles.item}>
                <img src={prosthesis.img} />

                <h2>{prosthesis.title}</h2>

                <p>{prosthesis.desc}</p>

                <b>{prosthesis.price}</b>

                <div onClick={onAddToCart} className={styles.add}>+</div>

            </div>
        </>
    );
}

export default ProsthesisItem;