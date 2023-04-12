import { NavLink } from './Utils.js/Navlink';
import { Img } from './Utils.js/Image';
import { Text } from './Utils.js/Text';
import Icon from './Utils.js/Icon';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styled from 'styled-components';
import pokeballImg from '../assets/pokeball-image.png';
import headerLogo from '../assets/header-logo.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to={routes.HOME}>
          <Img src={headerLogo} alt='pokemon-logo' height='60px' />
        </Link>

        <Text
          fontSize='1.5rem'
          color='white'
          fontFamily='Pokemon Solid'
          text='PoKéShoP'
        ></Text>
      </LogoWrapper>

      <PokeballImg src={pokeballImg} alt='pokeball image' />

      <Navbar>
        <NavLink
          to={routes.HOME}
          fontSize='1.75rem'
          color='white'
          text='Home'
        />

        <NavLink
          to={routes.SHOP}
          fontSize='1.75rem'
          color='white'
          text='Shop'
        />

        <NavLink
          to={routes.CONTACT}
          fontSize='1.75rem'
          color='white'
          text='Contact'
        />
        {/* Note: Add cart link below  */}
        <Icon fontSize='2.5rem' className='fa-solid fa-bag-shopping' />
      </Navbar>
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

const Navbar = styled.ul`
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
