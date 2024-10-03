import { useState } from "react";

function Login() {
    const [input, setInput] = useState({
        username: '',
        password: '',
        isAdmin: false
    })

    const handleChange = (event) => {
        setInput(prev => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    const handleClick = () => setInput(prev => ({...prev, isAdmin: !prev.isAdmin}))

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(JSON.stringify(input));
    }

    return ( 
        <form 
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
            <div style={{display: 'flex'}}>
                <label>Enter your username</label>
                <input type='text' name="username" value={input.username} onChange={handleChange}/>
            </div>
            <div style={{display: 'flex'}}>
                <label>Enter your password</label>
                <input type='password' name="password" value={input.password} onChange={handleChange}/>
            </div>
            <div>
                <input type='checkbox' value={input.isAdmin} onClick={handleClick}/>
                <label>is Admin?</label>
            </div>
            <button onClick={handleSubmit}>Đăng nhập</button>
        </form>
       
     );
}

export default Login;