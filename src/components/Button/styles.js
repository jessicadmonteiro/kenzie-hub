import styled from "styled-components";

export const ButtonHeader = styled.button`
  width: 55px;
  height: 40px;
  font-size: 12px;

  color: #f8f9fa;
  background: #212529;
  border: transparent;
  border-radius: 4px;

  @media(max-width: 440px){
    height: 25px;
    font-size: 10px;
  }
`;

export const Button = styled.button`
  height: 48px;

  color: #868e96;
  background: #59323f;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
`;

export const ButtonGrey = styled.button`
  width: 100%;
  height: 48px;

  color: #ffffff;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
`;

export const ButtonPink = styled.button`
    height: 48px;

    color: #ffffff;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4px;

    margin-top: 15px;
`