import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login/Login";
import Hello2 from "./Hello2/Hello2";
import Car from "./Car/Car";

function Routess() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="hello" element={<Hello2 />} />
            <Route path="car" element={<Car />} />
            <Route path="*" element={<h1 style={{color: 'red'}}>Không tìm thấy trang web theo yêu cầu</h1>} />
           
        </Routes>
  </BrowserRouter>);
}

export default Routess;