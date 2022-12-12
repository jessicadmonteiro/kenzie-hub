import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ContextAPI } from "../ContextAPI/ContextAPI";

export const ContextTech = createContext({});

export const AuthProviderTech = ({ children }) => {
  const { arrayTech, setArrayTech } = useContext(ContextAPI);
  const [technology, setTechnology] = useState([]);
  const [idTech, setIdTech]= useState("")

  async function AddTech(data) {
    const token = window.localStorage.getItem("token");

    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: `${data}`,
      });

      setTechnology(response.data);

      setArrayTech([...arrayTech, response.data]);
    } catch (error) {
      toast.error("Já possui está tecnologia!");
    }
  }

  async function DeleteTech(id) {
    const token = window.localStorage.getItem("token");

    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const filter = arrayTech.filter((element) => element.id !== id);

      setArrayTech(filter);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async function ToEdit(data) {

    const id = idTech
    
    const token = window.localStorage.getItem("token");

    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: `${data}`,
      });

      const filter = arrayTech.filter((element) => element.id !== id);
      setArrayTech([...filter, response.data]);
      
    } catch (error) {}
    
  }

  return (
    <ContextTech.Provider
      value={{ AddTech, technology, setTechnology, setIdTech, DeleteTech, ToEdit }}
    >
      {children}
    </ContextTech.Provider>
  );
};
