import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home/>}/>
    </Routes>
  );
}

export default RoutesMain;
