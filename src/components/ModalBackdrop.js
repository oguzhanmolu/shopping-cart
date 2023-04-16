import styled from 'styled-components';
import { handleHideCart } from './Cart/CartToggle';
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
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export default ModalBackdrop;
