import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const ContextAPI = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [arrayTech, setArrayTech] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = window.localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setArrayTech(data.techs)
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function LoginUser(data) {
    try {
      const response = await api.post("/sessions", data);

      window.localStorage.clear();
      window.localStorage.setItem("token", response.data.token);
      setUser(response.data.user);

      
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Senha ou e-mail inválido!");
    }
  }
 
  return (
    <ContextAPI.Provider value={{ LoginUser, user, setUser, arrayTech, setArrayTech, loading }}>
      {children}
    </ContextAPI.Provider>
  );
};
