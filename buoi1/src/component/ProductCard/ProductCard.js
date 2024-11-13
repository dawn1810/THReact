import classNames from "classnames/bind";

import styles from "./ProductCard.module.scss";

const cx = classNames.bind(styles);

function ProductCard({ name, price, img }) {
  return (
    <div className={cx("card")}>
      {/* <div className={cx("image")}> */}
      <img className={cx("image")} alt={name} src={img} />
      {/* <span className={cx("text")}>This is a chair.</span> */}
      {/* </div> */}
      <span className={cx("title")}>{name}</span>
      <span className={cx("price")}>{price} VND</span>
    </div>
  );
}

export default ProductCard;
