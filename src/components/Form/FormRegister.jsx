import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { Form } from "./styles";
import { registerSchema } from "../../pages/register/registerSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ButtonPink } from "../Button/styles";

function FormRegister() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  async function RegisterUser(formData) {
    try {
      setLoading(true);
      await api.post("/users ", formData);

      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error)
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  async function submit(data) {
    const formData = {
      name: data.name,
      password: data.password,
      email: data.email,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    await RegisterUser(formData);
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <h2>Crie sua conta</h2>
      <p>Rapido e grátis, vamos nessa</p>

      <Input
        label="Nome"
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        disabled={loading}
      />
      {errors.name?.message && <span>{errors.name.message}</span>}

      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={loading}
      />
      {errors.email?.message && <span>{errors.email.message}</span>}

      <Input
        label="Senha"
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disabled={loading}
      />
      {errors.password?.message && <span>{errors.password.message}</span>}

      <Input
        label="Confirmar Senha"
        type="password"
        id="ConfirmPassword"
        placeholder="Digite novamente sua senha"
        register={register("passwordConfirmation")}
        disabled={loading}
      />
      {errors.passwordConfirmation?.message && (
        <span>{errors.passwordConfirmation.message}</span>
      )}

      <Input
        label="Bio"
        type="text"
        id="bio"
        placeholder="Fale sobre você"
        register={register("bio")}
        disabled={loading}
      />
       {errors.bio?.message && <span>{errors.bio.message}</span>}
       
      <Input
        label="Contato"
        type="text"
        id="contact"
        placeholder="Opção de contato"
        register={register("contact")}
        disabled={loading}
      />
      {errors.contact?.message && <span>{errors.contact.message}</span>}

      <label htmlFor="selectModule">Selecionar módulo</label>
      <select
        name="selectModule"
        id=""
        {...register("course_module")}
        disabled={loading}
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>

      <ButtonPink type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </ButtonPink>
    </Form>
  );
}

export default FormRegister;
