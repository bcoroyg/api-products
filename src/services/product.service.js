import productsMock from "../utils/mocks/products.js"

class ProductService {

  constructor() { };

  getProducts({ tags }) {
    console.log(tags)
    return Promise.resolve(productsMock);
  };

  getProduct({ productId }) {
    console.log(productId)
    return Promise.resolve(productsMock[0]);
  };

  createProduct({ product }) {
    console.log(product)
    return Promise.resolve(productsMock[0]);
  };

  updateProduct({ productId }) {
    console.log(productId)
    return Promise.resolve(productsMock[0]);
  };

  deleteProduct({ productId }) {
    console.log(productId)
    return Promise.resolve(productsMock[0]);
  };

};

export default new ProductService
