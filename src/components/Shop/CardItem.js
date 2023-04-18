import styled from 'styled-components';
// Reusable elements
import Img from '../elements/Image';
import { Text } from '../elements/Text';
import Button from '../elements/Button';

const CardItem = ({
  pokemonData,
  onImageClick,
  onImageMouseOut,
  onButtonClick,
  id,
}) => {
  return (
    <CardWrapper id={id}>
      <Text
        fontSize='1.5rem'
        color='yellow'
        text={`${pokemonData.name}`}
        fontFamily='Pokemon Solid'
        fontWeight='bold'
      />

      <Text
        fontSize='1.25rem'
        color='white'
        text={`Rarity: ${pokemonData.rarity}`}
        fontFamily='Pokemon Solid'
        fontWeight='bold'
      />

      <Img
        onClickAction={(e) => onImageClick(e)}
        onMouseOutAction={(e) => onImageMouseOut(e)}
        src={pokemonData.image}
        alt={`${pokemonData.name} image`}
        height='350px'
        cursor='zoom-in'
      />

      <Text
        fontSize='1.25rem'
        color='white'
        text={`Price: ${pokemonData.price} $`}
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
        onClickAction={onButtonClick}
      ></Button>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 25px;
  background-color: rgba(40, 40, 40, 0.5);
  border-radius: 10px;
  text-align: center;
`;

export default CardItem;
