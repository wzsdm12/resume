/* eslint-disable no-undef */
//For testing Connection to MOngo DB
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(process.env.DB_NAME);
    console.log(`Database: ${db.databaseName}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}

testConnection();
