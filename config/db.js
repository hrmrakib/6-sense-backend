import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${db_username}:${db_password}@cluster0.dmwxvyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let userCollection;

const connectDB = async () => {
  try {
    await client.connect();
    const db = client.db("6-sense-crud");
    userCollection = db.collection("users");

    console.log("Connected to the MongoDB database.");
  } catch (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
};

export { connectDB, userCollection };
