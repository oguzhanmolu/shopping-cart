const Img = ({
  height,
  width,
  src,
  alt,
  position,
  margin,
  cursor,
  onClickAction,
  onMouseOutAction,
}) => {
  return (
    <img
      onClick={onClickAction}
      onMouseOut={onMouseOutAction}
      src={src}
      alt={alt}
      style={{
        position: position,
        margin: margin,
        height: height,
        width: width,
        cursor: cursor,
      }}
    />
  );
};
export default Img;
