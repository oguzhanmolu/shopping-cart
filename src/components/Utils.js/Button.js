import styled from 'styled-components';

const Button = ({
  color,
  textColor,
  fontSize,
  padding,
  text,
  fontFamily,
  fontWeight,
}) => {
  return (
    <ButtonItem
      style={{
        backgroundColor: color,
        color: textColor,
        fontSize: fontSize,
        padding: padding,
        borderRadius: '5px',
        fontFamily: fontFamily,
        cursor: 'pointer',
        transition: 'all ease-in-out .5s',
        fontWeight: fontWeight,
      }}
    >
      {text}
    </ButtonItem>
  );
};

const ButtonItem = styled.button`
  &:hover {
    scale: 1.25;
  }
`;

export default Button;
