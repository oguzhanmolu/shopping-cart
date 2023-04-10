import styled from 'styled-components';

const PokemonText = ({ fontSize, color, text }) => {
  return (
    <Text
      style={{
        fontSize: fontSize,
        color: color,
        fontFamily: 'Pokemon Solid',
        cursor: 'pointer',
        transition: ' all ease-in-out 0.5s',
      }}
    >
      {text}
    </Text>
  );
};

export { PokemonText };

const Text = styled.p`
  &:hover {
    scale: 1.25;
  }
`;
