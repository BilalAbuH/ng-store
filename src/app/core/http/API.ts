export const Routes: { [key: string]: any } = {
  allProducts: 'https://fakestoreapi.com/products',
  singleProduct: (productid: string) =>
    `https://fakestoreapi.com/products/${productid}`,
};
