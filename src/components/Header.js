import styled from 'styled-components';
import headerPokeballImg from '../assets/header-pokeball-image.png';
import headerLogo from '../assets/header-logo.png';
import { LiItem } from './Utils.js/Utils';
import Icon from './Utils.js/Icon';
import routes from '../constants/routes.json';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      {/* <Link to={routes.HOME} /> */}
      <LogoWrapper>
        <Logo src={headerLogo} />
        <LogoText>PoKéShoP</LogoText>
      </LogoWrapper>

      <PokeballImg src={headerPokeballImg} />

      <nav>
        <Ul>
          <LiItem fontSize='1.75rem' color='white' text='Home' />
          <LiItem fontSize='1.75rem' color='white' text='Shop' />
          <LiItem fontSize='1.75rem' color='white' text='Contact Us' />
          <Icon className='fa-solid fa-bag-shopping' />
        </Ul>
      </nav>
    </HeaderWrapper>
  );
};
// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: rgb(228, 0, 8);
  border-bottom: 6.5px solid black;
`;

const LogoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 60px;
`;

const LogoText = styled.p`
  font-size: 1.5rem;
  color: white;
  font-family: 'Pokemon Solid';
`;

const PokeballImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 101px;
  height: 75px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    scale: 2.5;
  }
`;

const Ul = styled.ul`
  display: inline-flex;
  width: 450px;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  margin-right: 50px;
  list-style-type: none;
`;

export default Header;

// rgb(42,117,187)
// rgb(255, 203, 5)
