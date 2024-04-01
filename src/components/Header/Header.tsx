import { HeaderContainer } from "./Header.styled";
import LogoImage from '../../assets/Logo.png';

export default function Header(){
  return (
    <HeaderContainer>
      <img src={LogoImage} alt="Logo da to-do" height={48}/>
    </HeaderContainer>
  )
}