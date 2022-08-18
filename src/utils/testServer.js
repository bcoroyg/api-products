import supertest from 'supertest';

const testServer = (app) => {
  return supertest(app);
};

export default testServer;
