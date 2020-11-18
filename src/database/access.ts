import 'dotenv/config'
import mongoose from 'mongoose'

const uri = process.env.MONGO_URI

export default function createConnection () {
  if (!uri) {
    return
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
