import styled from 'styled-components';

const Button = ({
  minWidth,
  margin,
  padding,
  onClickAction,
  hoverScale,
  borderRadius,
  backgroundColor,
  textColor,
  fontSize,
  fontFamily,
  fontWeight,
  children,
  text,
}) => {
  return (
    <ButtonItem
      minWidth={minWidth}
      margin={margin}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClickAction}
      hoverScale={hoverScale}
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
    >
      {children}
      {text}
    </ButtonItem>
  );
};

const ButtonItem = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  min-width: ${(props) => props.minWidth};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => props.borderRadius || '5px'};
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  text-align: center;

  &:hover {
    ${(props) => `transform: ${props.hoverScale}`};
  }
`;

export default Button;
