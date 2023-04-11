import styled from 'styled-components';
import pokeballImg from '../assets/pokeball-image3.png';
import Icon from './Utils.js/Icon';
import { Img } from './Utils.js/Utils';

// Simple footer with github icon and link to my github page
const Footer = () => {
  const toggleGithubIcon = () => {};

  return (
    <FooterWrapper>
      <Img
        position='absolute'
        margin='0 0 50px 0'
        height='50px'
        src={pokeballImg}
        alt='Pokeball image'
      />

      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon
          fontSize='2.5rem'
          color='rgb(40,40,40)'
          className='fa-brands fa-github-alt fa-shake'
        ></Icon>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default Footer;
