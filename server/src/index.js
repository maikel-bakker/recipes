import Express from 'express'

const app = Express()
const port = 3002

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/v1/recipes', (req, res) => res.status(200).json([
  {
    id: 1,
    title: 'Recept 1'
  },
  {
    id: 2,
    title: 'Recept 2'
  },
  {
    id: 3,
    title: 'Recept 3'
  }
]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
