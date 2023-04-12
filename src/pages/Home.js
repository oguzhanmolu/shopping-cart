import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styled from 'styled-components';
// Images
import mainPokemonImg from '../assets/main-pokemon-cards.png';
import mainPokemonImg2 from '../assets/main-pokemon-cards2.png';
// Utils
import { Text } from '../components/Utils.js/Text';
import Button from '../components/Utils.js/Button';
import {
  appear,
  slideLeft,
  slideRight,
} from '../components/Utils.js/Animations';

// Home page
const Home = () => {
  return (
    <HomeWrapper>
      <TextWrapper>
        <Text
          fontSize='3.5rem'
          color='yellow'
          text={`PoKéShoP™`}
          fontFamily='Pokemon Solid'
          fontWeight='bold'
        />
        <Text
          fontSize='3rem'
          color='white'
          text={`Europe's biggest Pokemon card seller`}
          fontFamily='Pokemon Solid'
        />
      </TextWrapper>

      <div>
        <HomeImg src={mainPokemonImg} alt='Pokemon cards packages' />
        <HomeImg2 src={mainPokemonImg2} alt='Pokemon cards' />
      </div>

      <Text
        fontSize='2rem'
        color='white'
        text={`Offering 250+ Pokemon cards with amazing deals!`}
        fontFamily='Pokemon Solid'
      />

      <Link to={routes.SHOP}>
        <Button
          color='rgb(228,0,8)'
          textColor='white'
          fontSize='1.5rem'
          fontFamily='Roboto'
          fontWeight='bold'
          text='Check Now!'
          padding='15px'
        ></Button>
      </Link>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  height: 75vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: ${appear} 2.5s;
  background-color: rgba(40, 40, 40, 0.5);
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const HomeImg = styled.img`
  height: 275px;
  animation: ${slideRight} 1.5s;
`;

const HomeImg2 = styled.img`
  height: 300px;
  animation: ${slideLeft} 1.5s;
`;

export default Home;
