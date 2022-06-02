import api from '../services/api'
import '../components/Navbar.css'
import { useEffect, useState } from 'react'
import { Estado } from '../types/estadoType'

function Populacao() {
  const [estados, setEstados] = useState<Estado[]>([])

  useEffect(() => {
    api
      .get('/populacao')
      .then((response) => setEstados(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return (
    <ul className="content">
      {estados.map((estado) => {
        return (
          <ol key={estado.id}>
            <strong>{estado.populacao}</strong>
            <strong> - {estado.nome}</strong>
            <strong> - {estado.uf}</strong>
          </ol>
        )
      })}
    </ul>
  )
}

export default Populacao
