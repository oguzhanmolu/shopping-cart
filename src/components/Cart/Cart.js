import styled from 'styled-components';
import CartItem from './CartItem';
import { itemTotalPrice } from '../Utils.js/CartSum';
// CSS & Assets
import '../../styles/typewriter.css';
import { handleHideCart, handleCheckout } from './CartToggle';
import charizardImg from '../../assets/charizard.gif';
// Reusable elements
import Button from '../elements/Button';
import Img from '../elements/Image';
import Text from '../elements/Text';

const Cart = ({ cartItem, setCartItem }) => {
  // Handle increment/decrement after +- buttons are clicked in cart
  const handleCountChange = (e, action) => {
    const clickedCardId = e.target.parentNode.parentNode.id;
    const pokemonIndexInCart = cartItem.findIndex(
      (pokemon) => pokemon.id === clickedCardId
    );
    const newCart = [...cartItem];

    action === 'increment'
      ? newCart[pokemonIndexInCart].count++
      : newCart[pokemonIndexInCart].count--;

    //  If card.count is 0 => Mutate object from array
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
          color='white'
          fontSize='1.75rem'
          fontFamily='Pokemon Solid'
          fontWeight='bold'
          text={`Your Total: ${itemTotalPrice(cartItem)} $`}
        />

        <div>
          <Button
            onClickAction={() => handleCheckout(setCartItem)}
            hoverScale='scale(1.25)'
            minWidth='150px'
            margin='0 10px 0 0'
            padding='10px'
            backgroundColor='rgb(42,117,187)'
            textColor='white'
            fontSize='1.5rem'
            fontFamily='Pokemon Solid'
            text='Checkout'
          />
          <Button
            onClickAction={handleHideCart}
            hoverScale='scale(1.25)'
            minWidth='150px'
            margin='0 0 0 10px'
            padding='10px'
            backgroundColor='rgb(228,0,8)'
            textColor='white'
            fontSize='1.5rem'
            fontFamily='Pokemon Solid'
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
