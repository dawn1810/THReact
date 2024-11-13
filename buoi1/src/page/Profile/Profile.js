import classNames from 'classnames/bind';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const data = {
    ten: 'Ghê nhựa',
    gia: '100.000',
    hinhanh:
        'https://product.hstatic.net/1000380002/product/ghe_banh_giot_nuoc-06_0429c0a2994e4a6a9274e35329af5ba7.jpg',
    mota: 'Ghế nhựa màu đỏ với tựa lưng mang đến sự thoải mái và tiện dụng. \nThiết kế đơn giản nhưng tinh tế, phù hợp với nhiều không gian khác nhau. \nChất liệu nhựa bền đẹp, dễ lau chùi, thích hợp cho cả trong nhà và ngoài trời.',
};

function Product() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} alt={data.ten} src={data.hinhanh} />
            <div className={cx('info-container')}>
                <div className={cx('title')}>{data.ten}</div>
                <div className={cx('price')}>{data.gia} VND</div>
                <div
                    className={cx('decribe')}
                    dangerouslySetInnerHTML={{
                        __html: data.mota.replaceAll('\n', '<br />'),
                    }}
                />
            </div>
        </div>
    );
}

export default Product;
