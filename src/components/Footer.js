import styled from 'styled-components';
import Icon from './elements/Icon';

// Simple footer with github icon and link to my github page
const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon
          fontSize='2.5rem'
          color='white'
          className='fa-brands fa-github-alt fa-bounce'
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
