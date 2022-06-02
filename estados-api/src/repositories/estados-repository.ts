import Estados from '../models/estados'
import database from './database'

const estadosRepository = {
  lerEstadosTodos: (callback: (estados: Estados[]) => void) => {
    const sql = 'SELECT DISTINCT id,uf,nome FROM estados'
    const params: any[] = []
    database.all(sql, params, (_err, rows) => callback(rows))
  },
  ler: (id: number, callback: (estado?: Estados) => void) => {
    const sql = 'SELECT * FROM estados WHERE id = ?'
    const params = [id]
    database.get(sql, params, (_err, row) => callback(row))
  },
  lerPopulacaoTodos: (callback: (estados: Estados[]) => void) => {
    const sql = 'SELECT * FROM estados'
    const params: any[] = []
    database.all(sql, params, (_err, rows) => callback(rows))
  },
  lerPopulacao: (id: number, callback: (estado?: Estados) => void) => {
    const sql = 'SELECT DISTINCT uf,nome,populacao FROM estados WHERE id = ?'
    const params = [id]
    database.get(sql, params, (_err, row) => callback(row))
  },
  lerPopulacaoEstado: (uf: string, callback: (estado?: Estados) => void) => {
    const sql = 'SELECT DISTINCT uf,nome,populacao FROM estados WHERE uf = ?'
    const params = [uf]
    database.get(sql, uf, (_err, row) => callback(row))
  },
}
export default estadosRepository
