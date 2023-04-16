import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import Cart from './components/Cart/Cart';
import ModalBackdrop from './components/ModalBackdrop';

function App() {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
      <Cart />
      <ModalBackdrop />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(42, 117, 187);
`;

export default App;
