import MongoLib from "../lib/mongo.js";
//import productsMock from "../utils/mocks/products.js"


class ProductService {

  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  };

  async getProducts({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  };

  async getProduct({ productId }) {
    const product = await this.mongoDB.getOne(this.collection, productId);
    return product || {};
  };

  async createProduct({ product }) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  };

  async updateProduct({ productId, product }) {
    const updateProductId = await this.mongoDB.update(
      this.collection,
      productId,
      product
    );
    return updateProductId;
  };

  async deleteProduct({ productId }) {
    const deletedProductId = await this.mongoDB.delete(
      this.collection,
      productId
    );
    return deletedProductId
  };

};

export default new ProductService
