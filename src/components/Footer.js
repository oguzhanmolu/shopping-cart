import styled from 'styled-components';
import Icon from './elements/Icon';

const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon
          className='fa-brands fa-github-alt fa-bounce'
          color='white'
          fontSize='2.5rem'
        ></Icon>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    transition: all ease-in-out 0.5s;
    &:hover {
      scale: 1.25;
    }
  }
`;

export default Footer;
