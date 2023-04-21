import styled from 'styled-components';
import routes from '../data/routes.json';
import { Link } from 'react-router-dom';
// Images
import pokeballImg from '../assets/pokeball-image.png';
import headerLogo from '../assets/header-logo.png';
// Reusable elements
import NavLink from './elements/NavLink';
import Img from './elements/Image';
import Text from './elements/Text';
import Icon from './elements/Icon';
import Button from './elements/Button';
//
import { itemTotalCount } from './Utils.js/CartSum';
import { handleShowCart } from './Cart/CartToggle';

const Header = ({ cartItem }) => {
  return (
    <HeaderWrapper>
      {/* Header logo */}
      <LogoWrapper>
        <Link to={routes.HOME}>
          <Img src={headerLogo} alt='pokemon-logo' height='60px' />
        </Link>

        <Text
          fontSize='1.4rem'
          color='white'
          fontFamily='Pokemon Solid'
          text='PoKéShoP'
        ></Text>
      </LogoWrapper>

      {/* Center pokeball image */}
      <Img
        hoverScale='scale(2.5)'
        src={pokeballImg}
        alt='Pokeball image'
        position='absolute'
        height='75px'
        margin='100px auto 0 auto'
        cursor='pointer'
      />

      {/* Navbar */}
      <Navbar>
        <NavLink
          to={routes.HOME}
          text='Home'
          scale='scale(1.25)'
          color='white'
          fontSize='1.75rem'
        />

        <NavLink
          to={routes.SHOP}
          text='Shop'
          scale='scale(1.25)'
          color='white'
          fontSize='1.75rem'
        />

        <NavLink
          to={routes.CONTACT}
          text='Contact'
          scale='scale(1.25)'
          color='white'
          fontSize='1.75rem'
        />

        {/* Cart icon group */}
        <CartWrapper>
          <Button
            onClickAction={handleShowCart}
            hoverScale='scale(1.15)'
            padding='10px 10px 17.5px 10px'
            backgroundColor='white'
            textColor='rgb(228,0,8)'
            fontFamily='Roboto'
            fontWeight='bold'
          >
            <Icon
              color='rgb(228,0,8)'
              fontSize='1.5rem'
              className='fa-solid fa-bag-shopping'
            />
          </Button>

          <Text
            position='absolute'
            margin='34px 0 0 0'
            color='red'
            fontFamily='Roboto'
            fontWeight='bold'
            text={itemTotalCount(cartItem)}
          ></Text>
        </CartWrapper>
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

const LogoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  cursor: pointer;
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

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
