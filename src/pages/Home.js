import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Utils.js/Button';
import mainPokemonImg from '../assets/main-pokemon-cards.png';
import mainPokemonImg2 from '../assets/main-pokemon-cards2.png';
import { Text } from '../components/Utils.js/Text';
import {
  appear,
  slideLeft,
  slideRight,
} from '../components/Utils.js/Animations';

// Home page
const Home = () => {
  return (
    <HomeWrapper>
      <Text
        fontSize='3.5rem'
        color='white'
        text={`Europe's biggest Pokemon card seller`}
        fontFamily='Pokemon Solid'
      />

      <div>
        <HomeImg src={mainPokemonImg} height='300px' />
        <HomeImg2 src={mainPokemonImg2} height='300px' />
      </div>

      <Link to={routes.SHOP}>
        <Button
          color='rgb(228,0,8)'
          textColor='white'
          fontSize='1.5rem'
          fontFamily='Roboto'
          text='Shop Now!'
          padding='15px'
        ></Button>
      </Link>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 125px;
  animation: ${appear} 2.5s;
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
