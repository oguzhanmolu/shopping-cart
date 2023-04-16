import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styled from 'styled-components';
// Images
import pokeballImg from '../assets/pokeball-image.png';
import headerLogo from '../assets/header-logo.png';
// Utils
import { NavLink } from './Utils.js/Navlink';
import { Img } from './Utils.js/Image';
import { Text } from './Utils.js/Text';
import Icon from './Utils.js/Icon';
import Button from './Utils.js/Button';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to={routes.HOME}>
          <Img src={headerLogo} alt='pokemon-logo' height='50px' />
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

        <CartWrapper>
          <Icon
            color='white'
            fontSize='2rem'
            className='fa-solid fa-bag-shopping'
          />

          <Text
            color='white'
            fontFamily='Roboto'
            fontWeight='bold'
            text='0'
            margin='30px 0 0 2.5px'
          ></Text>
        </CartWrapper>
      </Navbar>
    </HeaderWrapper>
  );
};
// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  top: 0;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: rgb(228, 0, 8);
  border-bottom: 6.5px solid black;
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

const LogoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  cursor: pointer;
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
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

export default Header;
