import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import FormLogin from "../../components/Form/FormLogin/FormLogin";
import { Body } from "../../styles/body";
import { ButtonGrey } from "../../components/Button/styles";
import { Header } from "./styles";
import { ContainerForm } from "../../components/Form/styles";

function Login() {
  const navigate = useNavigate();

  function pageRoute() {
    navigate("/register");
  }

  return (
    <Body>
        <Header>
          <img src={Logo} alt="Logo" />
        </Header>
        <ContainerForm
         margin="margin30"
        >
          <FormLogin/>
          <p>Ainda não possui uma conta?</p>
          <ButtonGrey onClick={pageRoute}>Cadastre-se</ButtonGrey>
        </ContainerForm>
    </Body>
  );
}

export default Login;
