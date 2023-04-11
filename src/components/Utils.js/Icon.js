import styled from 'styled-components';

const Icon = ({ color, className }) => {
  return <IconItem style={{ color: color }} className={className} />;
};

const IconItem = styled.i`
  font-size: 2.5rem;
  color: white;
  transition: all ease-in-out 0.5s;
  animation-duration: 10s;
  &:hover {
    scale: 1.25;
  }
`;

export default Icon;
