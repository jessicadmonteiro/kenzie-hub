import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;

  margin: auto;
`;

export const BoxShadow = styled.div`
  box-shadow: 0 0 1px #868e96;
`;

export const CustomerData = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  padding: 40px 0;
  margin: auto;

  h2 {
    font-weight: 700;
    font-size: 18px;

    color: #f8f9fa;
  }

  p {
    font-weight: 400;
    font-size: 12px;

    color: #868e96;
  }

  @media(max-width: 740px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Message = styled.div`
  width: 70%;

  padding-top: 30px;
  margin: auto;
  h2 {
    font-weight: 700;
    font-size: 18px;

    color: #f8f9fa;
  }

  p {
    font-weight: 400;
    font-size: 16px;

    color: #f8f9fa;

    margin-top: 20px;
  }
`;
