import styled from 'styled-components';

const Icon = ({ color, className, fontSize, margin }) => {
  return (
    <IconItem
      style={{ color: color, fontSize: fontSize, margin: margin }}
      className={className}
    />
  );
};

const IconItem = styled.i`
  color: white;
  transition: all ease-in-out 0.5s;
  animation-duration: 5s;
  &:hover {
    scale: 1.25;
  }
`;

export default Icon;
