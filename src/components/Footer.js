import styled from 'styled-components';
import Icon from './Utils.js/Icon';

// Simple footer with github icon and link to my github page
const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon
          color='rgb(40,40,40)'
          className='fa-brands fa-github fa-bounce'
        ></Icon>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default Footer;
