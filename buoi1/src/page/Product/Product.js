import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCookie } from '../../lib/function';

const cx = classNames.bind(styles);

const data = {
    ten: 'Ghê nhựa',
    gia: '100.000',
    hinhanh:
        'https://product.hstatic.net/1000380002/product/ghe_banh_giot_nuoc-06_0429c0a2994e4a6a9274e35329af5ba7.jpg',
    mota: 'Ghế nhựa màu đỏ với tựa lưng mang đến sự thoải mái và tiện dụng. \nThiết kế đơn giản nhưng tinh tế, phù hợp với nhiều không gian khác nhau. \nChất liệu nhựa bền đẹp, dễ lau chùi, thích hợp cho cả trong nhà và ngoài trời.',
};

function Product() {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const [data, setData] = useState();

    useEffect(() => {
        const getProductInfo = async () => {
            const token = getCookie('jwt');
            const response = await fetch('http://localhost:8000/api/getProductInfo', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    masp: searchParams.get('id'),
                }),
            });

            const productInfo = await response.json();
            if (productInfo.EC === '200') {
                setData(productInfo.DT);
            } else if (productInfo.EC === '401') {
                navigate('/login');
            } else if (productInfo.EC === '500') {
                alert('Lỗi hệ thông');
            }
        };

        getProductInfo();
    }, [searchParams]);

    return (
        <div className={cx('wrapper')}>
            {data && (
                <>
                    <img className={cx('image')} alt={data.ten} src={data.hinhanh} />
                    <div className={cx('info-container')}>
                        <div className={cx('title')}>{data.ten}</div>
                        <div className={cx('price')}>{data.gia} VND</div>
                        <div
                            className={cx('decribe')}
                            dangerouslySetInnerHTML={{
                                __html: data.mota ? data.mota.replaceAll('\n', '<br />') : 'Không có mô tả',
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Product;
