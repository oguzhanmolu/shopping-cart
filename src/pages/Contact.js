import styled from 'styled-components';
import Icon from '../components/Utils.js/Icon';
import { RegularText } from '../components/Utils.js/Text';
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
      <IconWrapper>
        <ShopItem symbol='amazon' />
        <ShopItem symbol='facebook' />
        <ShopItem symbol='twitter' />
        <ShopItem symbol='instagram' />
        <ShopItem symbol='youtube' />
        <ShopItem symbol='whatsapp' />
        <ShopItem symbol='line' />
        <ShopItem symbol='telegram' />
      </IconWrapper>

      <iframe
        style={{ height: '400px', width: '750px' }}
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6824.676747673466!2d-0.13491653584897012!3d51.502388581743816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1681304219543!5m2!1sen!2str'
      ></iframe>

      <RegularText
        fontSize='2rem'
        color='white'
        text='61 Stoke Newington High St, Stoke Newington. London , United Kingdom. '
      />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  & > * {
    padding: 10px;
    border-radius: 10px;
    font-size: 3rem;
    background-color: rgba(40, 40, 40, 0.5);
    text-align: center;
    animation: ${appear} 2.5s;
  }
`;

export default Contact;
