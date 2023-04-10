import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  // Fetch API
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

  const create = () => {
    pokemons.data.forEach((pokemon) => console.log(pokemon));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <MainWrapper></MainWrapper>;
};

const MainWrapper = styled.main``;

export default Main;
