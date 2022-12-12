import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Conteiner, CustomerData, BoxShadow, ContainerCard } from "./styles";
import { Body } from "../../styles/body";
import { useContext } from "react";
import { ContextAPI } from "../../contexts/ContextAPI/ContextAPI";
import CardTech from "../../components/CardTech";

function Home() {
  const { user, setUser, loading } = useContext(ContextAPI);
  const navigate = useNavigate();

  if (loading) {
    return null;
  }

  function pageRoute() {
    navigate("/");
    window.localStorage.clear();
    setUser("");
  }

  return user ? (
    <Body>
      <Conteiner>
        <BoxShadow>
          <Header
            width="width70"
            padding="padding15px"
            callback={pageRoute}
            nameButton="Sair"
          />
        </BoxShadow>
        <BoxShadow>
          <CustomerData>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </CustomerData>
        </BoxShadow>
        <ContainerCard>
          <CardTech/>
        </ContainerCard>
      </Conteiner>
    </Body>
  ) : (
    <Navigate to="/" />
  );
}

export default Home;
