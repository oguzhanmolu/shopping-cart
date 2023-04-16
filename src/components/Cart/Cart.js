import styled from 'styled-components';
import '../../styles/Typewriter.css';

import { handleHideCart } from './CartToggle';
import charizardImg from '../../assets/charizard.gif';
// Reusable elements
import Button from '../elements/Button';
import Img from '../elements/Image';

const Cart = ({ cartItem }) => {
  // Show text animation after checkout button is pressed
  const handleCheckoutAnimation = () => {
    const text = document.querySelector('.typewriter');
    text.style.display = 'block';
  };
  return (
    <CartSection id='cart'>
      <CartWrapper>
        <ButtonWrapper>
          <Button
            textColor='white'
            backgroundColor='rgb(42,117,187)'
            fontSize='1.5rem'
            fontFamily='Pokemon Solid'
            padding='10px'
            minWidth='150px'
            onClickAction={handleCheckoutAnimation}
            text='Checkout'
          />
          <Button
            textColor='white'
            backgroundColor='rgb(228,0,8)'
            fontSize='1.5rem'
            fontFamily='Pokemon Solid'
            padding='10px'
            minWidth='150px'
            onClickAction={handleHideCart}
            text='Close Cart'
          />
        </ButtonWrapper>

        <div>
          <div className='typewriter'>
            <p>Thank you for your purchase! *roars*</p>
          </div>

          <Img height='250px' src={charizardImg} alt='Charizard GIF' />
        </div>
      </CartWrapper>
    </CartSection>
  );
};

const CartSection = styled.section`
  position: fixed;
  height: 100vh;
  width: 30vw;
  left: 100%;
  z-index: 2;
  background-color: white;
  transition: all ease-in-out 1s;
  text-align: center;
`;

const CartWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #252628;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export default Cart;
