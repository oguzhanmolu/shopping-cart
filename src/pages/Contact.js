import styled from 'styled-components';
import Icon from '../components/elements/Icon';
import { Text } from '../components/elements/Text';
import { appear } from '../styles/Animations';

const Contact = () => {
  const IconItem = ({ symbol }) => {
    return (
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
        <Icon className={`fa-brands fa-${symbol}`} />
      </a>
    );
  };

  return (
    <ContactWrapper>
      <div>
        <Text
          fontSize='1.75rem'
          color='white'
          text='Map'
          fontFamily='Roboto'
          textAlign='center'
          margin='0 0 10px 0'
        />

        <iframe
          style={{
            height: '350px',
            width: '600px',
            border: 0,
            allowfullscreen: '',
            loading: 'lazy',
            referrerpolicy: 'no-referrer-when-downgrade',
            borderRadius: '10px',
          }}
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6824.676747673466!2d-0.13491653584897012!3d51.502388581743816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1681304219543!5m2!1sen!2str'
        ></iframe>
      </div>

      <Text
        fontSize='1.5rem'
        color='white'
        text='Address: 61 Stoke Newington High St, Stoke Newington. London , United Kingdom. '
        fontFamily='Roboto'
      />

      <div>
        <Text
          fontSize='1.75rem'
          color='white'
          text='Links'
          fontFamily='Roboto'
          textAlign='center'
          margin='25px 0 10px 0'
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
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  height: 75vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 50px;
  border-radius: 10px;
  background-color: rgba(40, 40, 40, 0.5);
  animation: ${appear} 2.5s;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  & > * {
    padding: 10px;
    border-radius: 10px;
    font-size: 2rem;
    background-color: rgba(40, 40, 40, 0.5);
    text-align: center;
    transition: all ease-in-out 0.5s;

    &:hover {
      scale: 1.25;
      filter: invert();
    }
  }
`;

export default Contact;
