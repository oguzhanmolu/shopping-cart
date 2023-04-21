import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = ({ to, text, scale, color, fontSize }) => {
  return (
    <LinkItem to={to} scale={scale} color={color} fontSize={fontSize}>
      {text}
    </LinkItem>
  );
};

const LinkItem = styled(Link)`
  margin-top: 10px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: 'Pokemon Solid';
  text-decoration: none;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  &:hover {
    ${(props) => `transform:${props.scale}`}
  }
`;

export default NavLink;
