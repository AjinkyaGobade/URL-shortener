import "dotenv/config";

const env = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGO_URI || process.env.MONGODB_URL,
};

export { env };
