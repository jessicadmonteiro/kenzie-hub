import Logo from "../../assets/Logo.svg"
import { HeaderStyle,LogoHeader } from "./styles"
import { ButtonHeader } from "../Button/styles"

function Header ({nameButton, callback, width, padding}) {
    return(
        <HeaderStyle width={width} padding={padding} >
            <LogoHeader src={Logo} alt="Logo" />
            <ButtonHeader onClick={callback}>{nameButton}</ButtonHeader>
        </HeaderStyle>
    )
}

export default Header