import React from 'react';
import styled, { css } from 'styled-components';

const Img = ({
  height,
  width,
  src,
  alt,
  position,
  margin,
  onClickAction,
  onMouseOutAction,
  hoverScale,
  cursor,
  animation,
}) => {
  return (
    <ImageItem
      src={src}
      alt={alt}
      position={position}
      height={height}
      width={width}
      margin={margin}
      onClick={onClickAction}
      onMouseOut={onMouseOutAction}
      cursor={cursor}
      hoverScale={hoverScale}
      animation={animation}
    />
  );
};

const ImageItem = styled.img`
  position: ${(props) => props.position};
  left: 0;
  right: 0;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  transition: all ease-in-out 0.5s;
  animation: ${({ animation }) =>
    css`
      ${animation} 1s
    `};
  &:hover {
    ${(props) => `transform: ${props.hoverScale}`};
  }
`;

export default Img;
