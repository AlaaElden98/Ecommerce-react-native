export const dummyCategory = {
  title: 'CategoryTitle',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyProduct = {
  title: 'ProductTitle',
  imageUrl: 'https://reactjs.org/logo-og.png',
  price: 100,
  discount: 0.2,
  discription: 'A nasdnal ;lamdlk ',
};

export const dummyCartItem = {
  product: dummyProduct,
};
export const dummyOrder = {
  cartItems: [dummyCartItem],
  cost: 150,
  status: 'PLACED',
};
