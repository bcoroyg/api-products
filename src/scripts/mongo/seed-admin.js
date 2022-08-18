import bcrypt from 'bcrypt';
import chalk from 'chalk';
import config from '../../config/index.js';
import MongoLib from '../../lib/mongo.js';

const buildAdminUser = (password) => {
  return {
    password,
    username: config.authAdminUsername,
    email: config.authAdminEmail
  };
}

const hasAdminUser = async (mongoDB) => {
  const adminUser = await mongoDB.getAll("users", {
    username: config.authAdminUsername
  });

  return adminUser && adminUser.length;
}

const createAdminUser = async (mongoDB) => {
  const hashedPassword = await bcrypt.hash(config.authAdminPassword, 12);
  const userId = await mongoDB.create("users", buildAdminUser(hashedPassword));
  return userId;
}

const seedAdmin = async () => {
  try {
    const mongoDB = new MongoLib();

    if (await hasAdminUser(mongoDB)) {
      console.log(chalk.yellow("Admin user already exists"));
      return process.exit(1);
    }

    const adminUserId = await createAdminUser(mongoDB);
    console.log(chalk.green("Admin user created with id:", adminUserId));
    return process.exit(0);
  } catch (error) {
    console.log(chalk.red(error));
    process.exit(1);
  }
}

seedAdmin();
