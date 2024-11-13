import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () =>
    setInput((prev) => ({ ...prev, isAdmin: !prev.isAdmin }));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(input));
  };

  return (
    /* From Uiverse.io by nathann09 */

    <form className={cx("form")}>
      <p className={cx("form-title")}>Đăng nhập tài khoản</p>
      <div className={cx("input-container")}>
        <input
          type="email"
          placeholder="Nhập email"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <span></span>
      </div>
      <div className={cx("input-container")}>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={cx("submit")} onClick={handleSubmit}>
        Đăng nhập
      </button>
    </form>
  );

  {
    /* <form 
            style={{
                width: '400px',
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'center',
                alignItems: 'center',
                border: '3px solid black', 
                margin:'auto'
            }}
        >
            <div >
                <label>Enter your username</label>
                <input type='text' name="username" value={input.username} onChange={handleChange}/>
            </div>
            <div >
                <label>Enter your password</label>
                <input type='password' name="password" value={input.password} onChange={handleChange}/>
            </div>
            <div>
                <input type='checkbox' value={input.isAdmin} onClick={handleClick}/>
                <label>is Admin?</label>
            </div>
            <button onClick={handleSubmit}>Đăng nhập</button>
        </form> */
  }
}

export default Login;
