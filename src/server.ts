import express from 'express'
import cors from 'cors'
import createConnection from './database/access'

import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
createConnection()
app.use(routes)

app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333')
})
