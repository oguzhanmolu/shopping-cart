import styled from 'styled-components';
import headerPokeballImg2 from '../assets/header-pokeball-image2.png';
import Icon from './Utils.js/Icon';
import { Img } from './Utils.js/Utils';

// Simple footer with github icon and link to my github page
const Footer = () => {
  return (
    <FooterWrapper>
      <Img height='30px' src={headerPokeballImg2} alt='Pokeball image' />

      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon
          fontSize='2rem'
          color='white'
          className='fa-brands fa-github-alt fa-bounce'
        ></Icon>
      </a>
      <Img height='30px' src={headerPokeballImg2} alt='Pokeball image' />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: white;
`;

export default Footer;
