import styled from 'styled-components';
import cards from '../constants/cards.json';
import CardItem from '../components/Shop/CardItem';
import { appear } from '../styles/Animations';
import { click } from '@testing-library/user-event/dist/click';

const Shop = ({ cartItem, setCartItem }) => {
  // Map and create an object with only necessary values from long json data
  const pokemonArr = [];
  cards.data.forEach((card) => {
    pokemonArr.push({
      id: card.id,
      name: card.name,
      rarity: card.rarity || 'Unknown',
      image: card.images.large,
      price: card.cardmarket.prices.averageSellPrice,
      count: 1,
    });
  });

  // Add selected card to 'cartItem'
  const handleAddToCart = (e) => {
    // Clicked card's id and idex from cartItem
    const pokemonId = e.target.parentNode.id;
    const pokemonIndexInCart = cartItem.findIndex(
      (pokemon) => pokemon.id === pokemonId
    );

    // If Card (id) does not exist in cart, add it
    if (pokemonIndexInCart === -1) {
      const clickedPokemonCard = pokemonArr.find(
        (pokemon) => pokemon.id === pokemonId
      );

      setCartItem([...cartItem, clickedPokemonCard]);
    }
    // If it exists, card.count++
    else {
      const newCart = [...cartItem];
      newCart[pokemonIndexInCart].count++;
      setCartItem(newCart);
    }
  };

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
        id={card.id}
        pokemonData={card}
        onImageClick={handleZoomOnImage}
        onImageMouseOut={handleZoomOutImage}
        onButtonClick={(e) => handleAddToCart(e)}
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
