export const handleShowCart = () => {
  const cart = document.getElementById('cart');
  const modalBackdrop = document.getElementById('modalBackdrop');

  cart.style.transform = 'translateX(-100%)';
  modalBackdrop.style.display = 'block';
};

export const handleHideCart = () => {
  const cart = document.getElementById('cart');
  const modalBackdrop = document.getElementById('modalBackdrop');

  cart.style.transform = 'translateX(100%)';
  modalBackdrop.style.display = 'none';
};
