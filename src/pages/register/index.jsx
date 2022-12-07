import React from "react";
import { useNavigate } from "react-router-dom";
import FormRegister from "../../components/Form/FormRegister/FormRegister";
import { Body } from "../../styles/body";
import { ContainerForm } from "../../components/Form/styles";
import Header from "../../components/Header";

function Register() {
  const navigate = useNavigate();

  function pageRoute() {
    navigate("/");
  }

  return (
    <Body>
        <Header
          width="width30"
          padding="paddingTop40px"
          callback={pageRoute}
          nameButton="Voltar"
        />
        <ContainerForm>
          <FormRegister />
        </ContainerForm>
    </Body>
  );
}

export default Register;
