import dotenv from 'dotenv';
import mongoose, { ConnectOptions, Mongoose } from 'mongoose';
dotenv.config();



class MongoDbDataBase {
  private url: string;

  constructor() {
    this.url = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/?retryWrites=true&w=majority&appName=Cluster`;
  }

  public connectDB() : void{
    mongoose
      .connect(this.url)
      .then(() => {
        console.log('BD conectada!! 🚀✔');
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  public disconnectDB(): void {
    mongoose
      .disconnect()
      .then(() => {
        console.log('BD desconectada');
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
}

const mongoDB = new MongoDbDataBase();

export default mongoDB;

