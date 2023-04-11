import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = ({ fontSize, color, text, to }) => {
  return (
    <LinkItem
      to={to}
      style={{
        fontSize: fontSize,
        color: color,
        fontFamily: 'Pokemon Solid',
        cursor: 'pointer',
        transition: ' all ease-in-out 0.5s',
        marginTop: '10px',
      }}
    >
      {text}
    </LinkItem>
  );
};

const Img = ({ height, width, src, alt, animation }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: height, width: width, animation: animation }}
    />
  );
};

const PokemonFontText = ({ fontSize, color, text }) => {
  return (
    <p
      style={{ fontSize: fontSize, color: color, fontFamily: 'Pokemon Solid' }}
    >
      {text}
    </p>
  );
};

const LinkItem = styled(Link)`
  text-decoration: none;
  &:hover {
    scale: 1.25;
  }
`;

export { NavLink, Img, PokemonFontText };
