import styled from 'styled-components';

const Button = ({
  backgroundColor,
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
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: fontSize,
        padding: padding,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all ease-in-out .5s',
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
