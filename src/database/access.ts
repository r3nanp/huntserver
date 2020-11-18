import 'dotenv/config'
import mongoose from 'mongoose'

const uri = process.env.MONGO_URI

export default async function createConnection () {
  if (!uri) {
    return
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.info('MongoDB connect...');
  } catch (err) {
    console.error(`Error to connect | ${err.message}`);
  }
}
