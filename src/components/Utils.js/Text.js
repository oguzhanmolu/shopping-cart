const Text = ({ fontSize, color, text, fontFamily, fontWeight, margin }) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        color: color,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        margin: margin,
      }}
    >
      {text}
    </p>
  );
};

export { Text };
