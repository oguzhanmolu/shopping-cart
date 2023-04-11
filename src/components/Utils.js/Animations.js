import styled, { keyframes } from 'styled-components';

const appear = keyframes`
0%{opacity:0;
}

100%{opacity:1;
}
`;

const slideRight = keyframes`
0%{opacity:0;
  transform: translate(-100%);
}

100%{opacity:1;
  transform: translate(0%);
}
`;

const slideLeft = keyframes`
0%{opacity:0;
  transform: translate(100%);
}

100%{opacity:1;
  transform: translate(0%);
}
`;

export { appear, slideLeft, slideRight };
