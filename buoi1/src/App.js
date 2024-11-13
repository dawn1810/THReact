import classNames from "classnames/bind";

import styles from "./App.module.scss";
import GroupSelect from "./component/GroupSelect";
import ProductCard from "./component/ProductCard";

const cx = classNames.bind(styles);

const productList = [
  {
    ten: "Ghê nhựa",
    gia: "100.000",
    hinhanh:
      "https://product.hstatic.net/1000380002/product/ghe_banh_giot_nuoc-06_0429c0a2994e4a6a9274e35329af5ba7.jpg",
  },
  {
    ten: "Bàn gỗ",
    gia: "500.000",
    hinhanh: "https://bizweb.dktcdn.net/100/453/361/products/ghe-go-mam-non-cho-be-18.jpg?v=1657793200697",
  },
  {
    ten: "Tủ lạnh",
    gia: "10.000.000",
    hinhanh: "https://cdn.tgdd.vn/Products/Images/1943/326891/tu-lanh-aqua-inverter-358-lit-aqr-t410fa-wgb-2-700x467.jpg",
  },
  {
    ten: "Máy giặt",
    gia: "7.000.000",
    hinhanh: "https://congnghenhat.com/wp-content/uploads/2024/04/May-giat-Panasonic-NA-LX125CL-W.jpg",
  },
  {
    ten: "Tivi",
    gia: "8.000.000",
    hinhanh: "https://darlingvietnam.net/wp-content/uploads/smart-tivi-32-inch-darling-32hd959t2.jpg",
  },
  {
    ten: "Lò vi sóng",
    gia: "2.000.000",
    hinhanh: "https://cuckoovina.com/wp-content/uploads/2022/09/CW_CMW-A201D-WHVNCV.png",
  },
  {
    ten: "Nồi cơm điện",
    gia: "500.000",
    hinhanh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vhjR2-g2EaWuc-mF-gIVDEOiyzJJX8H0-A&s",
  },
  {
    ten: "Bếp ga",
    gia: "1.000.000",
    hinhanh: "https://wetrek.vn/pic/products/fanfan-bep-gas-cam-trai-mini-max-11_638515397661814691.jpg",
  },
  {
    ten: "Quạt điện",
    gia: "300.000",
    hinhanh: "https://dienmaycongthanh.vn/Upload/Products/quat-dung-senko-dcn1806/DCN1806_1.jpg",
  },
  {
    ten: "Máy xay sinh tố",
    gia: "500.000",
    hinhanh: "https://kingshop.vn/data/images/May-xay-sinh-to-KC-T02-1.jpg",
  },
];

function App() {
  return (
    <div className={cx("wrapper")}>
      <GroupSelect />
      <div className={cx("product-list")}>
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            name={product.ten}
            price={product.gia}
            img={product.hinhanh}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
