import express from 'express'
import Estados from '../models/estados'
import estadosRepository from '../repositories/estados-repository'

const estadosRouter = express.Router()

estadosRouter.get('/estados', (req, res) => {
  estadosRepository.lerEstadosTodos((estados) => res.json(estados))
})

estadosRouter.get('/estados/:id', (req, res) => {
  const id: number = +req.params.id
  estadosRepository.ler(id, (estado) => {
    if (estado) {
      res.json(estado)
    } else {
      res.status(404).send()
    }
  })
})

estadosRouter.get('/estados/:uf', (req, res) => {
  const uf: string = req.params.uf
  console.log(uf)
  estadosRepository.lerEstado(uf, (estado) => {
    if (estado) {
      res.json(estado)
    } else {
      res.status(404).send()
    }
  })
})

estadosRouter.get('/populacao', (req, res) => {
  estadosRepository.lerPopulacaoTodos((estados) => res.json(estados))
})

estadosRouter.get('/populacao/:uf', (req, res) => {
  const uf: string = req.params.uf
  estadosRepository.lerPopulacao(uf, (estado) => {
    if (estado) {
      res.json(estado)
    } else {
      res.status(404).send()
    }
  })
})

export default estadosRouter
