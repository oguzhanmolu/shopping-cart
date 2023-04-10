import styled from 'styled-components';

const LiItem = ({ fontSize, color, text }) => {
  return (
    <Li
      style={{
        fontSize: fontSize,
        color: color,
        fontFamily: 'Pokemon Solid',
        cursor: 'pointer',
        transition: ' all ease-in-out 0.5s',
        marginTop: '10px',
      }}
    >
      {text}
    </Li>
  );
};

export { LiItem };

const Li = styled.li`
  &:hover {
    scale: 1.25;
  }
`;
