import styled from 'styled-components';
import cards from '../constants/cards.json';
import CardItem from '../components/Shop/CardItem';
import { appear } from '../styles/Animations';

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

  // Zoom in image on click
  const handleZoomOnImage = (e) => {
    e.target.style.scale = '1.6';
    e.target.style.cursor = 'zoom-out';
  };
  // Zoom out image on mouseout
  const handleZoomOutImage = (e) => {
    e.target.style.scale = '1';
    e.target.style.cursor = 'zoom-in';
  };

  // Create cart items from mapped 'pokemonArr'
  const cardItems = pokemonArr.map((card) => {
    return (
      <CardItem
        key={card.id}
        pokemonData={card}
        onClickAction={handleZoomOnImage}
        onMouseOutAction={handleZoomOutImage}
      />
    );
  });

  return (
    <>
      <ShopWrapper>{cardItems}</ShopWrapper>
    </>
  );
};

const ShopWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin: 50px;
  animation: ${appear} 1s;
`;

export default Shop;
