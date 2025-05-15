import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL)
        const data = await response.json()
        console.log('Datos de la API:', data)
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
        <h1>Books</h1>
    </>
  )
}

export default App