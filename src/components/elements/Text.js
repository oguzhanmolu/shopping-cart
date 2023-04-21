import styled from 'styled-components';

const Text = ({
  position,
  margin,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  text,
}) => {
  return (
    <TextItem
      position={position}
      margin={margin}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textAlign={textAlign}
    >
      {text}
    </TextItem>
  );
};

const TextItem = styled.p`
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
`;

export default Text;
