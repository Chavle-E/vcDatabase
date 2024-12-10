const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

console.log(MONGODB_URI);

const connectMongo = async () => {
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }

  try {
    // If already connected, return
    if (mongoose.connection.readyState === 1) {
      console.log('Already connected to MongoDB');
      return;
    }

    // Add database name if not present in URI
    let uri = MONGODB_URI;
    if (!uri.includes('/guga-chavle?')) {
      uri = uri.replace('/?', '/guga-chavle?');
    }

    console.log('Connecting to MongoDB database:', uri);
    await mongoose.connect(uri);
    console.log('Connected to database:', mongoose.connection.db.databaseName);
    
    // Log collection counts for debugging
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      const count = await collection.countDocuments();
      console.log(`Collection ${collection.collectionName} has ${count} documents`);
    }

  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

module.exports = connectMongo;