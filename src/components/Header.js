import styled from 'styled-components';
import headerPokeballImg from '../assets/header-pokeball-image2.png';
import headerLogo from '../assets/header-logo.png';
import { LiItem } from './Utils.js/Utils';
import { Icon } from './Utils.js/Icon';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={headerLogo} />
        <p>PoKéShoP</p>
      </LogoWrapper>

      <PokeballImg src={headerPokeballImg} />

      <nav>
        <Ul>
          <LiItem fontSize='1.75rem' color='white' text='Home' />
          <LiItem fontSize='1.75rem' color='white' text='Shop' />
          <LiItem fontSize='1.75rem' color='white' text='Contact Us' />
          <Icon className='fa-solid fa-cart-shopping' />
        </Ul>
      </nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: rgb(42, 117, 187);
  border-bottom: 6.5px solid black;
`;

const LogoWrapper = styled.section`
  display: flex;
  width: 600px;
  align-items: center;
  gap: 10px;
  margin-left: 50px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  font-size: 1.75rem;
  color: white;
  font-family: 'Pokemon Solid';

  &:hover {
    scale: 1.1;
  }
`;

const Logo = styled.img`
  height: 75px;
`;

const PokeballImg = styled.img`
  margin-top: 100px;
  height: 75px;
`;

const Ul = styled.ul`
  display: inline-flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  margin-right: 50px;
  list-style-type: none;
`;

export default Header;
