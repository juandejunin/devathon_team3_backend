import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connectDB = () => {
  mongoose.connect(process.env.URL_MONGO as string)
    .then(() => { console.log('BBDD conectada') })
    .catch(err => { console.error(err) });
};

const disconnectDB = () => {
  mongoose.disconnect()
    .then(() => { console.log('BBDD desconectada') })
    .catch(err => { console.error(err) });
};

export { connectDB, disconnectDB };
