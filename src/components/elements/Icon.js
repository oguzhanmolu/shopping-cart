import styled from 'styled-components';

const Icon = ({ className, margin, color, fontSize }) => {
  return (
    <IconItem
      className={className}
      margin={margin}
      color={color}
      fontSize={fontSize}
    />
  );
};

const IconItem = styled.i`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  animation-duration: 5s;
  cursor: pointer;
`;

export default Icon;
