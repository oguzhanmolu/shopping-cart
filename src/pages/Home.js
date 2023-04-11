import styled from 'styled-components';
import mainPokemonImg from '../assets/main-pokemon-cards.png';
import mainPokemonImg2 from '../assets/main-pokemon-cards2.png';
// import mainPokemonImg3 from '../assets/main-pokemon-symbols.png';
import { Img } from '../components/Utils.js/Utils';

const Home = () => {
  return (
    <HomeWrapper>
      <Img src={mainPokemonImg} height='300px' />
      <Img src={mainPokemonImg2} height='300px' />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
export default Home;
