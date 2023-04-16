import styled from 'styled-components';

const Button = ({
  backgroundColor,
  textColor,
  fontSize,
  padding,
  text,
  fontFamily,
  fontWeight,
  borderRadius,
  minWidth,
  onClickAction,
  children,
}) => {
  return (
    <ButtonItem
      onClick={onClickAction}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: fontSize,
        padding: padding,
        minWidth: minWidth,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        borderRadius: borderRadius || '5px',
        cursor: 'pointer',
        transition: 'all ease-in-out .5s',
        textAlign: 'center',
      }}
    >
      {children}
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
