import styled, {css} from "styled-components";

const width = {
    width30: css`
    width: 30%;
    `,

    width70: css`
    width: 70%;
    `,

}

const padding = {
    padding15px: css`
    padding: 15px 0;
    `,

    paddingTop40px: css`
    padding-top: 40px;
    `,
}

export const HeaderStyle = styled.header`

    ${props => width[props.width]}

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;
    ${props => padding[props.padding]}

    @media(max-width: 740px){
        width: 70%;
    }
    
    @media(max-width: 440px) {
        width: 90%;
    }
`
export const LogoHeader = styled.img`
    width: 150px;
    height: 60px;
    
    @media(max-width: 440px) {
        width: 30%;
    }
`