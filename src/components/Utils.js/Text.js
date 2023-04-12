const Text = ({ fontSize, color, text, fontFamily, fontWeight }) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        color: color,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
      }}
    >
      {text}
    </p>
  );
};

export { Text };
