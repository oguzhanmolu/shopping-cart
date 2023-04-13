import styled from 'styled-components';

const Cart = () => {
  return <CartWrapper>Test</CartWrapper>;
};

const CartWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 30vw;
  left: 100%;
  transform: translateX(-100%);
  background-color: white;
`;

export default Cart;
