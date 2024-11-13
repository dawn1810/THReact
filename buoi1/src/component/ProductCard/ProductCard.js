import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductCard({ id, name, price, img }) {
    return (
        <Link to={'/product?id=' + id} className={cx('card')}>
            {/* <div className={cx("image")}> */}
            <img className={cx('image')} alt={name} src={img} />
            {/* <span className={cx("text")}>This is a chair.</span> */}
            {/* </div> */}
            <span className={cx('title')}>{name}</span>
            <span className={cx('price')}>{price} VND</span>
        </Link>
    );
}

export default ProductCard;
