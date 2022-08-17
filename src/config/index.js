if(process.env.PORT !== "production") {
  (await import("dotenv")).config();
};

const config = {
  dev: process.env.NODE_ENV?.trim() !== 'production',
  port: process.env.PORT,
};

export default config;
