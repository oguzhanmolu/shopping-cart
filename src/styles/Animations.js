import { keyframes } from 'styled-components';

const appear = keyframes`
0%{opacity:0;
}

100%{opacity:1;
}
`;

const slideRight = keyframes`
0%{
  transform: translateX(-100%);
}

100%{
  transform: translateX(0%);
}
`;

const slideLeft = keyframes`
0%{
  transform: translateX(100%);
}

100%{
  transform: translateX(0%);
}`;

export { appear, slideLeft, slideRight };
