import styled from 'styled-components';

const Button = ({ color, textColor, fontSize, padding, text, fontFamily }) => {
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
