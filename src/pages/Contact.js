import styled from 'styled-components';
import Icon from '../components/Utils.js/Icon';
import { appear } from '../components/Utils.js/Animations';

const Contact = () => {
  const ShopItem = ({ symbol }) => {
    return (
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
        <Icon className={`fa-brands fa-${symbol}`} />
      </a>
    );
  };

  return (
    <ContactWrapper>
      <ShopItem symbol='amazon' />
      <ShopItem symbol='facebook' />
      <ShopItem symbol='twitter' />
      <ShopItem symbol='instagram' />
      <ShopItem symbol='youtube' />
      <ShopItem symbol='whatsapp' />
      <ShopItem symbol='line' />
      <ShopItem symbol='telegram' />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  & > * {
    padding: 20px;
    border-radius: 10px;
    font-size: 4rem;
    background-color: rgba(40, 40, 40, 0.5);
    text-align: center;
    animation: ${appear} 2.5s;
  }
`;

export default Contact;
