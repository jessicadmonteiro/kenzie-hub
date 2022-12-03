import React from "react";
import Input from "../Input";
import { api } from "../../services/api";
import { Form } from "./styles";
import { ButtonPink } from "../Button/styles";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../pages/login/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function FormLogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  async function LoginUser(data) {
    try {
      const response = await api.post("/sessions", data);

      window.localStorage.clear();

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Senha ou e-mail inválido!");
    }
  }

  async function submit(data) {
    await LoginUser(data);
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>

      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Digite seu email"
        register={register("email")}
      />
      {errors.email?.message && <span>{errors.email.message}</span>}

      <Input
        label="Digite sua senha"
        type="password"
        id="password"
        placeholder="Digite sua senha"
        register={register("password")}
      />
      {errors.password?.message && <span>{errors.password.message}</span>}

      <ButtonPink>Entrar</ButtonPink>
    </Form>
  );
}

export default FormLogin;
