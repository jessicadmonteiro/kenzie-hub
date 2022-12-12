import { React } from "react";
import Input from "../../Input";
import { Form } from "../styles";
import { ButtonPink } from "../../Button/styles";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ContextAPI } from "../../../contexts/ContextAPI/ContextAPI";

function FormLogin() {
  const { LoginUser } = useContext(ContextAPI);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

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
