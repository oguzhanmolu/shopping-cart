import styled from 'styled-components';
import headerPokeballImg from '../assets/header-pokeball-image2.png';
import { PokemonText } from './Utils.js/PokemonText';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <PokemonText fontSize='2.5rem' color='white' text='PoKéMoN TCG Shop' />
      </HeaderTitle>
      <HeaderIcon src={headerPokeballImg} />
      <nav>
        <Ul>
          <>
            <PokemonText fontSize='1.75rem' color='white' text='Home' />
            <PokemonText fontSize='1.75rem' color='white' text='Shop' />
            <PokemonText fontSize='1.75rem' color='white' text='Contact Us' />
            <Icon className='fa-solid fa-cart-shopping' />
          </>
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

const HeaderTitle = styled.section`
  width: 600px;
  margin-left: 50px;
`;

const HeaderIcon = styled.img`
  margin-top: 100px;
  height: 75px;
`;

const Ul = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  width: 600px;
  margin-right: 50px;
  list-style-type: none;
`;

const Icon = styled.i`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 5px;
  transition: all ease-in-out 0.5s;
  &:hover {
    scale: 1.25;
  }
`;

export default Header;
