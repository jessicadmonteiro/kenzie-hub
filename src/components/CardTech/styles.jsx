import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h2 {
    font-weight: 700;
    font-size: 16px;

    color: #f8f9fa;
  }

  img {
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 25px;
  background: #212529;
`;

export const H3Text = styled.h3`
  font-size: 16px;
  text-align: center;
  color: #868e96;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #121214;
  border-radius: 4px;

  padding: 20px;

  :hover {
    background: #343b41;
  }

  h3 {
    font-weight: 700;
    font-size: 14px;
    color: #f8f9fa;
  }

  p {
    font-weight: 400;
    font-size: 13px;

    color: #868e96;
  }

  @media (max-width: 475px) {
    align-items: baseline;

    h3,
    p {
      font-size: 10px;
    }
  }
`;

export const ContainertLevelTrash = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  div {
    display: flex;
    gap: 15px;
  }

  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  @media (max-width: 475px) {
    img {
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 15px;

    height: 30px;

  }
`;
