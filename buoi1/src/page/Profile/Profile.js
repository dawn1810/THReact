import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getCookie } from '../../lib/function';
import { DataContext } from '../../lib/provider';

const cx = classNames.bind(styles);

function Product() {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const [data, setData] = useState();

    useEffect(() => {
        const getProductInfo = async () => {
            const token = getCookie('jwt');
            const response = await fetch('http://localhost:8000/api/getUserInfo', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userId: searchParams.get('id'),
                }),
            });

            const userInfo = await response.json();
            console.log(userInfo);

            if (userInfo.EC === '200') {
                setData(userInfo.DT);
            } else if (userInfo.EC === '401') {
                navigate('/login');
            } else if (userInfo.EC === '500') {
                alert('Lỗi hệ thông');
            }
        };

        getProductInfo();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {data && (
                <>
                    <div className={cx('text')}>Email: {data.email}</div>
                    <div className={cx('text')}>Họ và tên: {data.fullname}</div>
                    <div className={cx('text')}>
                        Giới tính: {data.sex === 0 ? 'Nam' : data.sex === 1 ? 'Nữ' : 'Khác'}
                    </div>
                    <div className={cx('text')}>Địa chỉ: {data.address && data.address !== 'null' ? data.address : 'Chưa có'}</div>
                </>
            )}
        </div>
    );
}

export default Product;
