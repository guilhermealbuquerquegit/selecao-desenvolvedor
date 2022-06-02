import express from 'express'
import cors from 'cors'
import estadosRouter from './routers/estados-router'

const PORT = process.env.PORT || 4000

const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Bem-vindo!')
})

//LEMBRAR DE RODA O FRONTEND NESSA API
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)

// Rotas
app.use('/api', estadosRouter)

app.use((req, res) => {
  res.status(404)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
