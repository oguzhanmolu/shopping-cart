const Text = ({
  fontSize,
  color,
  text,
  fontFamily,
  fontWeight,
  margin,
  textAlign,
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
      }}
    >
      {text}
    </p>
  );
};

export { Text };
