import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styled from 'styled-components';
import { itemTotalCount } from './Utils.js/CartSum';
// Images
import pokeballImg from '../assets/pokeball-image.png';
import headerLogo from '../assets/header-logo.png';
// Reusable elements
import { NavLink } from './elements/Navlink';
import Img from './elements/Image';
import { Text } from './elements/Text';
import Icon from './elements/Icon';
import Button from './elements/Button';
import { handleShowCart } from './Cart/CartToggle';

const Header = ({ cartItem }) => {
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
        <ButtonWrapper>
          <Button
            onClickAction={handleShowCart}
            padding='15px'
            backgroundColor='white'
            textColor='rgb(228,0,8)'
            fontSize='1rem'
            fontFamily='Roboto'
            fontWeight='bold'
            borderRadius='50px'
          >
            <Icon
              color='rgb(228,0,8)'
              fontSize='1.5rem'
              className='fa-solid fa-bag-shopping'
            />
          </Button>

          <Text
            position='fixed'
            margin='40px 0 0 0'
            color='red'
            fontFamily='Roboto'
            fontWeight='bold'
            text={itemTotalCount(cartItem)}
          ></Text>
        </ButtonWrapper>
      </Navbar>
    </HeaderWrapper>
  );
};
// Styled components
const HeaderWrapper = styled.header`
  top: 0;
  position: sticky;
  z-index: 1;
  display: flex;
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

const PokeballImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 100px;
  height: 75px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    scale: 2.5;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
