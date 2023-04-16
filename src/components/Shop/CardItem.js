import styled from 'styled-components';
// Reusable elements
import { Img } from '../elements/Image';
import { Text } from '../elements/Text';
import Button from '../elements/Button';

const CardItem = ({ pokemonData, onClickAction, onMouseOutAction }) => {
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
        onClickAction={(e) => onClickAction(e)}
        onMouseOutAction={(e) => onMouseOutAction(e)}
        src={pokemonData.images.large}
        alt={`${pokemonData.name} image`}
        height='350px'
        cursor='zoom-in'
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
  gap: 5px;
  padding: 10px;
  background-color: rgba(40, 40, 40, 0.5);
  border-radius: 10px;
`;

export default CardItem;
