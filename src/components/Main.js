import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Img } from './Utils.js/Image';
import styled from 'styled-components';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import routes from '../constants/routes.json';

const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  // Fetch is really slow sometimes,
  // That's why using constants/cards.json instead
  /* useEffect(() => {
    const fetchData = async () => {
      const endpoint = 'https://api.pokemontcg.io/v2/cards';
      const apiKey = process.env.REACT_APP_API_KEY;

      const response = await fetch(endpoint, {
        headers: {
          'x-api-key': apiKey,
        },
      });

      const data = await response.json();
      console.log('Successful fetch');
      setPokemons(data);
    };
    fetchData();
  }, []);*/

  // Handle animation
  const handleCartAnimation = () => {
    const cart = document.getElementById('cart');

    return console.log(cart.style.display);
  };

  return (
    <MainWrapper>
      <Routes>
        <Route index element={<Home />} />
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.SHOP} element={<Shop pokemons={pokemons.data} />} />
        <Route path={routes.CONTACT} element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`;

export default Main;

// import pokemonSymbols from '../assets/main-pokemon-symbols.png';
