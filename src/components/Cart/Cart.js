import styled from 'styled-components';
import { handleHideCart } from './CartToggle';

const Cart = () => {
  return (
    <CartWrapper id='cart'>
      <button onClick={handleHideCart}>Close</button>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 30vw;
  left: 100%;
  z-index: 2;
  background-color: white;
  transition: all ease-in-out 1s;
`;

export default Cart;
