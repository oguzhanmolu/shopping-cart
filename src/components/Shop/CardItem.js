import styled from 'styled-components';
// Utils
import { Img } from '../Utils.js/Image';
import { Text } from '../Utils.js/Text';
import Button from '../Utils.js/Button';

const CardItem = ({ pokemonData }) => {
  return (
    <CardWrapper>
      <Text
        fontSize='1.5rem'
        color='white'
        text={`${pokemonData.name} (${pokemonData.rarity})`}
        fontFamily='Pokemon Solid'
        fontWeight='bold'
      />

      <Img
        src={pokemonData.images.large}
        alt={`${pokemonData.name} image`}
        height='400px'
      />

      <Text
        fontSize='1.25rem'
        color='white'
        text={`${pokemonData.prices.averageSellPrice} $`}
        fontFamily='Pokemon Solid'
        fontWeight='bold'
        margin='10px 0 0 0'
      />

      <Button
        backgroundColor='rgb(228,0,8)'
        textColor='white'
        fontSize='1.25rem'
        fontFamily='Roboto'
        fontWeight='bold'
        text='Add to Cart!'
        padding='10px'
      ></Button>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 25px;
  background-color: rgba(40, 40, 40, 0.5);
  border-radius: 10px;
  text-align: center;
`;

export default CardItem;
