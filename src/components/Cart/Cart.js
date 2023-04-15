import styled from 'styled-components';

const Cart = () => {
  return <CartWrapper id='cart'>Test</CartWrapper>;
};

const CartWrapper = styled.div`
  display: none;
  position: absolute;
  height: 100vh;
  width: 30vw;
  left: 70%;
  /* transform: translateX(-100%); */
  background-color: white;
  transition: all ease-in-out;
`;

export default Cart;
