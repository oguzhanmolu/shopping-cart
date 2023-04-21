// Toggle cart on
export const handleShowCart = () => {
  const cart = document.getElementById('cart');
  const modalBackdrop = document.getElementById('modalBackdrop');

  cart.style.transform = 'translateX(-100%)';
  modalBackdrop.style.display = 'block';
};

// Toggle cart off
export const handleHideCart = () => {
  const cart = document.getElementById('cart');
  const modalBackdrop = document.getElementById('modalBackdrop');

  cart.style.transform = 'translateX(100%)';
  modalBackdrop.style.display = 'none';
};

// Show text animation after checkout button is pressed, then restart page
export const handleCheckout = () => {
  const text = document.querySelector('.Typewriter__Animation');
  text.style.display = 'block';

  setInterval(() => window.location.reload(), 5000);
};
