import styled from 'styled-components';
import cards from '../constants/cards.json';
import CardItem from '../components/Shop/CardItem';

const Shop = () => {
  // Map and create an object with only necessary values from json data
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

  // Create cart items from mapped 'pokemonArr'
  const cardItems = pokemonArr.map((card) => {
    return <CardItem key={card.id} pokemonData={card} />;
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

export default Shop;
