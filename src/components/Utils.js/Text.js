const PokemonFontText = ({ fontSize, color, text }) => {
  return (
    <p
      style={{ fontSize: fontSize, color: color, fontFamily: 'Pokemon Solid' }}
    >
      {text}
    </p>
  );
};

const RegularText = ({ fontSize, color, text }) => {
  return (
    <p style={{ fontSize: fontSize, color: color, fontFamily: 'Roboto' }}>
      {text}
    </p>
  );
};

export { PokemonFontText, RegularText };
