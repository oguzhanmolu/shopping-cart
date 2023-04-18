import styled from 'styled-components';
import Img from '../elements/Image';
import { Text } from '../elements/Text';
import Button from '../elements/Button';

const CartItem = ({ id, cardInfo, handleCountChange }) => {
  return (
    <CartItemWrapper>
      <Img height='200px' src={cardInfo.image} alt={`${cardInfo.name} image`} />

      <TextWrapper id={id}>
        <Text
          fontSize='1.75rem'
          color='yellow'
          text={cardInfo.name}
          fontFamily='Pokemon Solid'
          fontWeight='bold'
        />

        <Text
          fontSize='1.5rem'
          color='white'
          text={`(${cardInfo.rarity})`}
          fontFamily='Pokemon Solid'
          fontWeight='bold'
        />

        <Text
          fontSize='1.5rem'
          color='white'
          text={`${cardInfo.price} $`}
          fontFamily='Pokemon Solid'
          fontWeight='bold'
        />

        <div>
          <Button
            backgroundColor='rgb(228,0,8)'
            textColor='white'
            fontFamily='Pokemon Solid'
            fontWeight='bold'
            text='-'
            fontSize='1.25rem'
            padding='7.5px'
            onClickAction={(e) => handleCountChange(e, 'decrement')}
          />

          <Text
            fontSize='1.5rem'
            color='white'
            text={cardInfo.count}
            fontFamily='Pokemon Solid'
            fontWeight='bold'
          />

          <Button
            backgroundColor='rgb(42,117,187)'
            textColor='white'
            fontFamily='Pokemon Solid'
            fontWeight='bold'
            text='+'
            fontSize='1.25rem'
            padding='7.5px'
            onClickAction={(e) => handleCountChange(e, 'increment')}
          ></Button>
        </div>
      </TextWrapper>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 25px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > * {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default CartItem;
