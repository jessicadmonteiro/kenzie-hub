import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {useState} from "react"

function App() {
  const [user, setUser] = useState()

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home user={user} setUser={setUser} />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
