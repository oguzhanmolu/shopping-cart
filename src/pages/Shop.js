import styled from 'styled-components';
import cards from '../constants/cards.json';
// Utils
import Icon from '../components/Utils.js/Icon';
import { Img } from '../components/Utils.js/Image';
import { Text } from '../components/Utils.js/Text';

const Shop = () => {
  // Get only necessary values from long json data
  const pokemonArr = [];
  cards.data.forEach((card) => {
    pokemonArr.push({
      id: card.id,
      name: card.name,
      rarity: card.rarity || 'Unknown',
      images: card.images,
      prices: card.cardmarket.prices,
    });
  });

  // Create CardItems from cards.json data
  const cardItems = pokemonArr.map((card) => {
    return (
      <CardWrapper key={card.id}>
        <Img
          src={card.images.large}
          alt={`${card.name} image`}
          height='325px'
        />

        <div>
          <Text
            fontSize='1.5rem'
            color='yellow'
            text={`${card.name} (${card.rarity})`}
            fontFamily='Pokemon Solid'
            fontWeight='bold'
          />

          <Text
            fontSize='1.25rem'
            color='white'
            text={`${card.prices.averageSellPrice} $`}
            fontFamily='Pokemon Solid'
            fontWeight='bold'
            margin='10px 0 0 0'
          />
        </div>
      </CardWrapper>
    );
  });

  return (
    <>
      <ShopWrapper>{cardItems}</ShopWrapper>;
    </>
  );
};

const ShopWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  margin: 50px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 25px;
  background-color: rgba(40, 40, 40, 0.5);
  text-align: center;
`;

export default Shop;
