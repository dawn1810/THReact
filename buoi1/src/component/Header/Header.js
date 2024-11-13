import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const handleLogout = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8000/api/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const logout = await response.json();
        console.log(logout);
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
                <p>dawn1810 - admin</p>
                <button onClick={handleLogout}>Đăng xuất</button>
            </div>
        </header>
    );
}

export default Header;
