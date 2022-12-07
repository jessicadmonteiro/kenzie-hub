import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Conteiner, CustomerData, Message, BoxShadow } from "./styles";
import { Body } from "../../styles/body";

function Home({user, setUser}) {

  const navigate = useNavigate();

  function pageRoute() {
    
    navigate("/");
    window.localStorage.clear();
    setUser("")

  }

  return (
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
        <Message>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </Message>
      </Conteiner>
    </Body>
  );
}

export default Home;
