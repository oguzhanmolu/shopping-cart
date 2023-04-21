import { Route, Routes } from 'react-router-dom';
import routes from '../data/routes.json';
import styled from 'styled-components';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

const Main = ({ cartItem, setCartItem }) => {
  // .fetch is sometimes slow and unreliable,
  // That's why replaced this with data/cards.json instead
  // const [pokemons, setPokemons] = useState([]);
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
  }, []);
  */

  return (
    <MainWrapper id='main'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path={routes.HOME} element={<Home />} />

        <Route
          path={routes.SHOP}
          element={<Shop cartItem={cartItem} setCartItem={setCartItem} />}
        />

        <Route path={routes.CONTACT} element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
