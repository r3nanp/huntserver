import express from 'express'
import cors from 'cors'
import '../database/createConnection'

import { routes } from './routes'
import { errorHandler } from '../errors/errorsHandler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errorHandler)

export { app }
