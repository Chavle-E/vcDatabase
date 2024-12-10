const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const testConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    const db = mongoose.connection.db;

    // Check collections
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections.map((col) => col.name));

    // Fetch sample data from investors collection
    const investors = await db.collection("investors").find({}).limit(5).toArray();
    console.log("Sample Investors:", investors);

    // Fetch sample data from funds collection
    const funds = await db.collection("funds").find({}).limit(5).toArray();
    console.log("Sample Funds:", funds);

    process.exit(0);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

testConnection();