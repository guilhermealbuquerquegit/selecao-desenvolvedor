import api from '../services/api'
import '../components/Navbar.css'
import { useEffect, useState } from 'react'
import { Estado } from '../types/estadoType'

function Estados() {
  const [estados, setEstados] = useState<Estado[]>([])

  useEffect(() => {
    api
      .get('/estados')
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
            <strong>{estado.nome}</strong>
            <strong> - {estado.uf}</strong>
          </ol>
        )
      })}
    </ul>
  )
}

export default Estados
