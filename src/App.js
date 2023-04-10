import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <ContentWrapper>
      <Header />
      <Main />
      <Footer />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: rgb(40, 40, 40);
`;

export default App;
