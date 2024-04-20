import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = () => {
  //const url1 = `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/`;
  const url = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/?retryWrites=true&w=majority&appName=Cluster`

  mongoose
    .connect(url)
    .then(() => {
      console.log('BD conectada!! 🚀✔');
    })
    .catch((err) => {
      console.error(err);
    
    });
};


const disconnectDB = () => {
  mongoose
    .disconnect()
    .then(() => {
      console.log('BD desconectada');
    })
    .catch((err) => {
      console.error(err);
    });
};

export { connectDB, disconnectDB };
