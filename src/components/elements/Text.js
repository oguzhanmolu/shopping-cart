const Text = ({
  fontSize,
  color,
  text,
  fontFamily,
  fontWeight,
  margin,
  textAlign,
  position,
}) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        color: color,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        margin: margin,
        textAlign: textAlign,
        position: position,
      }}
    >
      {text}
    </p>
  );
};

export { Text };
