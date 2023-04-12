const Text = ({ fontSize, color, text, fontFamily }) => {
  return (
    <p style={{ fontSize: fontSize, color: color, fontFamily: fontFamily }}>
      {text}
    </p>
  );
};

export { Text };
