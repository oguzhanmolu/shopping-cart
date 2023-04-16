import styled from 'styled-components';
import { handleHideCart } from './Cart/CartToggle';
import { slideRight } from '../styles/Animations';
const ModalBackdrop = () => {
  return (
    <BackdropWrapper
      id='modalBackdrop'
      onClick={handleHideCart}
    ></BackdropWrapper>
  );
};

const BackdropWrapper = styled.div`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.25);
  animation: ${slideRight} 0.5s;
  cursor: pointer;
`;

export default ModalBackdrop;
