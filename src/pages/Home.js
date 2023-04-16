import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styled from 'styled-components';

// Images
import mainPokemonImg from '../assets/main-pokemon-cards.png';
import mainPokemonImg2 from '../assets/main-pokemon-cards2.png';

// Reusable elements
import { Text } from '../components/elements/Text';
import Button from '../components/elements/Button';
import { appear, slideLeft, slideRight } from '../styles/Animations';

// Home page
const Home = () => {
  return (
    <HomeWrapper>
      <TextWrapper>
        <Text
          fontSize='3rem'
          color='yellow'
          text={`PoKéShoP™`}
          fontFamily='Pokemon Solid'
          fontWeight='bold'
        />
        <Text
          fontSize='2.5rem'
          color='white'
          text={`Europe's biggest Pokemon card seller`}
          fontFamily='Pokemon Solid'
          margin='25px 0 0 0'
        />
      </TextWrapper>

      <div>
        <HomeImg src={mainPokemonImg} alt='Pokemon cards packages' />
        <HomeImg2 src={mainPokemonImg2} alt='Pokemon cards' />
      </div>

      <Text
        fontSize='1.75rem'
        color='white'
        text={`Offering best deals with free shipping!`}
        fontFamily='Pokemon Solid'
      />

      <Link to={routes.SHOP}>
        <Button
          backgroundColor='rgb(228,0,8)'
          textColor='white'
          fontSize='1.25rem'
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
  width: 95vw;
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
