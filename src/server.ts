import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' })
})

app.listen(3333, () => {
  console.log('listening to 3333')
})