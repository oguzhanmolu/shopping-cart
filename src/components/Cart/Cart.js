import CartItem from './CartItem';
import styled from 'styled-components';
import '../../styles/typewriter.css';
import { Text } from '../elements/Text';
import { itemTotalPrice } from '../Utils.js/CartSum';

import { handleHideCart, handleCheckout } from './CartToggle';
import charizardImg from '../../assets/charizard.gif';
// Reusable elements
import Button from '../elements/Button';
import Img from '../elements/Image';

const Cart = ({ cartItem, setCartItem }) => {
  // Handle increment/decrement after +- buttons are clicked
  const handleCountChange = (e, action) => {
    const clickedCardId = e.target.parentNode.parentNode.id;
    const pokemonIndexInCart = cartItem.findIndex(
      (pokemon) => pokemon.id === clickedCardId
    );
    const newCart = [...cartItem];

    action === 'increment'
      ? newCart[pokemonIndexInCart].count++
      : newCart[pokemonIndexInCart].count--;

    // Mutate object if count is 0
    if (newCart[pokemonIndexInCart].count <= 0)
      newCart.splice(pokemonIndexInCart, 1);

    setCartItem(newCart);
  };

  const cartItems = cartItem.map((item) => {
    return (
      <CartItem
        handleCountChange={handleCountChange}
        id={item.id}
        key={item.id}
        cardInfo={item}
      />
    );
  });
  return (
    <CartWrapper id='cart'>
      <Text
        fontSize='2.25rem'
        color='white'
        text='Your Shopping Cart'
        fontFamily='Pokemon Solid'
        fontWeight='bold'
      />

      <CartItemWrapper>{cartItems}</CartItemWrapper>
      <ButtonWrapper>
        <Text
          fontSize='1.75rem'
          color='white'
          text={`Your Total: ${itemTotalPrice(cartItem)} $`}
          fontFamily='Pokemon Solid'
          fontWeight='bold'
        />

        <div>
          <Button
            textColor='white'
            backgroundColor='rgb(42,117,187)'
            fontSize='1.5rem'
            fontFamily='Pokemon Solid'
            margin='0 10px 0 0'
            padding='10px'
            minWidth='150px'
            onClickAction={handleCheckout}
            text='Checkout'
          />
          <Button
            textColor='white'
            backgroundColor='rgb(228,0,8)'
            fontSize='1.5rem'
            fontFamily='Pokemon Solid'
            margin='0 0 0 10px'
            padding='10px'
            minWidth='150px'
            onClickAction={handleHideCart}
            text='Close Cart'
          />
        </div>
      </ButtonWrapper>

      <div>
        <div className='Typewriter__Wrapper'>
          <p className='Typewriter__Animation'>
            Thank you for your purchase! *roars*
          </p>
        </div>

        <Img height='200px' src={charizardImg} alt='Charizard GIF' />
      </div>
    </CartWrapper>
  );
};

const CartWrapper = styled.section`
  min-height: 100vh;
  width: 30vw;
  left: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 10px;
  z-index: 2;
  transition: all ease-in-out 1s;
  background-color: #252628;
  text-align: center;
`;

const CartItemWrapper = styled.div`
  height: 57.5vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Cart;
