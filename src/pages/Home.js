import styled, { keyframes } from 'styled-components';
import mainPokemonImg from '../assets/main-pokemon-cards.png';
import mainPokemonImg2 from '../assets/main-pokemon-cards2.png';
import { Img } from '../components/Utils.js/Utils';
import {
  appear,
  slideLeft,
  slideRight,
} from '../components/Utils.js/Animations';

const Home = () => {
  return (
    <HomeWrapper>
      <MainText>Test text here gonna replace this abomination soon</MainText>
      <HomeImg src={mainPokemonImg} height='300px' />
      <HomeImg2 src={mainPokemonImg2} height='300px' />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  animation: ${appear} 1s;
`;

const MainText = styled.p`
  font-size: 4rem;
`;

const HomeImg = styled.img`
  height: 300px;
  animation: ${slideRight} 1.5s;
`;

const HomeImg2 = styled.img`
  height: 300px;
  animation: ${slideLeft} 1.5s;
`;

export default Home;
