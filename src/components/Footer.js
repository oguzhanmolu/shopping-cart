import styled from 'styled-components';
import { Icon } from './Utils.js/Icon';

// Simple footer with github icon and link to my github page
const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon className='fa-brands fa-github'></Icon>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

export default Footer;
