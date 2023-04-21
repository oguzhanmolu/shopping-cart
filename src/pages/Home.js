import styled from 'styled-components';
import routes from '../data/routes.json';
import { Link } from 'react-router-dom';
// Reusable elements
import Text from '../components/elements/Text';
import Button from '../components/elements/Button';
import Img from '../components/elements/Image';
// CSS
import mainPokemonImg from '../assets/main-pokemon-cards.png';
import mainPokemonImg2 from '../assets/main-pokemon-cards2.png';
import { appear, slideLeft, slideRight } from '../styles/Animations';

const Home = () => {
  return (
    <HomeWrapper>
      {/* Title */}
      <div>
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
      </div>

      {/* Middle images */}
      <div>
        <Img
          src={mainPokemonImg}
          alt='Pokemon cards packages'
          height='300px'
          animation={slideRight}
        />

        <Img
          src={mainPokemonImg2}
          alt='Pokemon cards'
          height='325px'
          animation={slideLeft}
        />
      </div>

      {/* Lower Text */}
      <Text
        fontSize='1.75rem'
        color='white'
        text={`Offering best deals with free shipping!`}
        fontFamily='Pokemon Solid'
      />

      {/* Button leads to shop */}
      <Link to={routes.SHOP}>
        <Button
          hoverScale='scale(1.25)'
          padding='15px'
          backgroundColor='rgb(228,0,8)'
          textColor='white'
          fontSize='1.25rem'
          fontFamily='Roboto'
          fontWeight='bold'
          text='Check Now!'
        />
      </Link>
    </HomeWrapper>
  );
};

// Styles
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
  text-align: center;
`;

export default Home;
