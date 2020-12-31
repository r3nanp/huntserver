import 'dotenv/config'
import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

async function createConnection() {
  if (!uri) {
    return console.error('Error connecting to the database!')
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.info('MongoDB connect...')
  } catch (err) {
    console.error(`Error to connect | ${err.message}`)
  }
}

createConnection()
