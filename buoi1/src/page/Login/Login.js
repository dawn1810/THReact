import { useContext, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../lib/provider';
const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const { setCurrUser } = useContext(DataContext);
    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        setInput((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    // const handleClick = () => setInput((prev) => ({ ...prev, isAdmin: !prev.isAdmin }));

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        });

        const login = await response.json();
        if (login.EC === '200') {
            setCurrUser(login.DT);
            navigate('/');
        } else if (login.EC === '500') {
            alert('Lỗi hệ thông');
        }
    };

    return (
        /* From Uiverse.io by nathann09 */

        <form className={cx('form')}>
            <p className={cx('form-title')}>Đăng nhập tài khoản</p>
            <div className={cx('input-container')}>
                <input
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    name="username"
                    value={input.username}
                    onChange={handleChange}
                />
                <span></span>
            </div>
            <div className={cx('input-container')}>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className={cx('submit')} onClick={handleSubmit}>
                Đăng nhập
            </button>
        </form>
    );
}

export default Login;
