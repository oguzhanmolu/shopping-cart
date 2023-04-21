import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import ModalBackdrop from './components/ModalBackdrop';
import styled from 'styled-components';

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <ContentWrapper>
      <BrowserRouter>
        <Header cartItem={cartItem} />
        <Main cartItem={cartItem} setCartItem={setCartItem} />
        <Footer />
      </BrowserRouter>
      <Cart cartItem={cartItem} setCartItem={setCartItem} />
      <ModalBackdrop />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(42, 117, 187);
`;

export default App;
