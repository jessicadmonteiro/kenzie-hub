import styled, {css} from "styled-components";

const margin = {
  margin30: css`
  margin: 30px; 
  `,
}

export const ContainerForm = styled.div`
  width: 30%;

  position: absolute;
  top: 20%;
  left: 35%;

  padding: 20px;

  background: #212529;

  p {
    text-align: center;

    font-weight: 600;
    font-size: 12px;
    color: #868e96;

    ${props => margin[props.margin]}

  }

  @media(max-width: 740px){
    width: 70%;
    left: 15%;
  }

  @media(max-width: 440px){
    width: 90%;
    left: 5%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: #f8f9fa;
    font-weight: 700;
    font-size: 18px;

    text-align: center;
    padding-bottom: 10px;
  }

  span {
    font-size: 12px;

    color: #ff577f;

    margin-bottom: 10px;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 12px;

    padding: 20px 0;

    color: #868e96;
  }


  label {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 12.182px;

    padding-bottom: 10px;
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

  
`;



