import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  
  background: rgba(18, 18, 20, 0.5);
`;

export const ContainerModal = styled.div`
  width: 30%;
  position: absolute;
  top: 30.5%;
  left: 20%;

  background: #212529;

  border-radius: 0px 0px 4px 4px;

  span {
    display: flex;
    justify-content: space-between;

    padding: 20px;
    margin-bottom: 10px;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;
  }

  form {
    width: 90%;
    margin: auto;

    button {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 14px;

    color: #f8f9fa;
  }

  label {
    font-weight: 400;
    font-size: 12.182px;

    color: #f8f9fa;

    padding-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  select {
    height: 48px;

    color: #868e96;
    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    padding-left: 20px;
    margin-bottom: 10px;
  }

  @media(max-width: 743px) {
    width: 50%;
    left: 10%;
  }

   @media(max-width: 420px) {
    width: 80%;
    left: -5%;
  }

`;
