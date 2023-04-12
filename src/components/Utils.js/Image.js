const Img = ({ height, width, src, alt, position, margin }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: position,
        margin: margin,
        height: height,
        width: width,
        cursor: 'pointer',
      }}
    />
  );
};
export { Img };
