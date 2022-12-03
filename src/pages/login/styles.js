import styled from "styled-components";

export const Header = styled.header`
  width: 30%;
  
  display: flex;
  justify-content: center;
  
  margin: auto;
  padding-top: 90px;
  

  img {
    width: 50%;
    height: 20px;
    
  }

  @media(max-width: 740px) {
    width: 70%;
  }
`;