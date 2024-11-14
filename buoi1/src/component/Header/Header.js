import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { DataContext } from '../../lib/provider';
import { useContext, useEffect } from 'react';
import { getCookie } from '../../lib/function';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const { currUser, setCurrUser } = useContext(DataContext);

    useEffect(() => {
        const checkUser = async () => {
            const token = getCookie('jwt');
            const response = await fetch('http://localhost:8000/api/checkUser', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const user = await response.json();
            if (user.EC === '200') {
                setCurrUser(user.DT)
            } else if (user.EC === '401') {
                navigate('/login');
            } else if (user.EC === '500') {
                alert('Lỗi hệ thông');
            }
        };

        checkUser();
    }, []);

    const handleLogout = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8000/api/logout', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const logout = await response.json();
        if (logout.EC === '200') {
            navigate('/login');
        } else if (logout.EC === '401') {
            alert('Yêu cầu xác thực');
            navigate('/login');
        }
    };

    return (
        <header className={cx('header')}>
            {/* <div className={cx('container')}> */}
            <Link className={cx('container')} to="/">
                <img
                    className={cx('image')}
                    alt="logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEndPkpxU-FDOQK0acJ6iuFECTI914xOelQ&s"
                />
                <p>Trang chủ</p>
            </Link>
            {/* </div> */}
            <div className={cx('container')}>
                {currUser && <Link className={cx('username')} to={'/profile?id=' + currUser.id}>
                    {currUser.username} - {currUser.role === 0 ? 'admin' : 'user'}
                </Link>}
                <button onClick={handleLogout}>Đăng xuất</button>
            </div>
        </header>
    );
}

export default Header;
