import styled from 'styled-components';
import Icon from '../components/Utils.js/Icon';
import { Text } from '../components/Utils.js/Text';
import { appear } from '../components/Utils.js/Animations';

const Contact = () => {
  // Icon Item
  const IconItem = ({ symbol }) => {
    return (
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
        <Icon className={`fa-brands fa-${symbol}`} />
      </a>
    );
  };

  return (
    <ContactWrapper>
      <iframe
        style={{
          height: '400px',
          width: '750px',
          border: 0,
          allowfullscreen: '',
          loading: 'lazy',
          referrerpolicy: 'no-referrer-when-downgrade',
        }}
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6824.676747673466!2d-0.13491653584897012!3d51.502388581743816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1681304219543!5m2!1sen!2str'
      ></iframe>

      <Text
        fontSize='1.75rem'
        color='white'
        text='61 Stoke Newington High St, Stoke Newington. London , United Kingdom. '
        fontFamily='Roboto'
      />

      <IconWrapper>
        <IconItem symbol='amazon' />
        <IconItem symbol='facebook' />
        <IconItem symbol='twitter' />
        <IconItem symbol='instagram' />
        <IconItem symbol='youtube' />
        <IconItem symbol='whatsapp' />
        <IconItem symbol='line' />
        <IconItem symbol='telegram' />
      </IconWrapper>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
  border-radius: 10px;
  background-color: rgba(40, 40, 40, 0.25);
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 50px;
  & > * {
    padding: 10px;
    border-radius: 10px;
    font-size: 2.5rem;
    background-color: rgba(40, 40, 40, 0.5);
    text-align: center;
    animation: ${appear} 2.5s;
    transition: all ease-in-out 0.5s;

    &:hover {
      scale: 1.25;
      filter: invert();
    }
  }
`;

export default Contact;
