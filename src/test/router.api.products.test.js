import assert from 'assert';
import app from '../index.js';
//import { productsMock, ProductsServiceMock } from '../utils/mocks/products.js';
import testServer from '../utils/testServer.js';

describe("routes - api - products", function() {
  const request = testServer(app);
  describe("GET /products", function() {
    it("should respond with status 200", (done) => {
      request.get("/api/v1/products").expect(200, done);
    });

    it("should respond with content type json", (done) => {
      request.get("/api/v1/products").expect("Content-type", /json/, done);
    });

    it("should respond with not error", (done) => {
      request.get("/api/v1/products").end((err, res) => { //eslint-disable-line
        assert.strictEqual(err, null);
        done();
      });
    });

    /* it("should respond with the list of products", (done) => {
      request.get("/api/v1/products").end((err, res) => {
        assert.deepEqual(res.body, {
          data: productsMock,
          message: "products listed"
        });
        done();
      });
    }); */
  });
});
