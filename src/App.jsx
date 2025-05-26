import './App.css'
import { useEffect, useState } from 'react'
import BookForm from './components/BookForm'
import BookCard from './components/BookCard'
import Header from './components/Header'


function App() {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json())
      .then(data => console.log('Datos de la API:', data))
      .catch(error => console.error('Error al obtener datos:', error))
  }, [])

  const handleAddBook = book => (setBooks([...books, book]), setShowForm(false))
  const handleEditBook = idx => alert('Edit book at index: ' + idx)
  const handleDeleteBook = idx => setBooks(books.filter((_, i) => i !== idx))

  return (
    <>
      <Header />
      {showForm ? (
        <>
          <button style={{margin: '0 0 1rem 0', background: '#b71c1c', color: '#fff'}} onClick={() => setShowForm(false)}>
            Form ocult
          </button>
          <BookForm onSubmit={handleAddBook} />
        </>
      ) : (
        <button style={{margin: '1rem 0', background: '#43a047', color: '#fff'}} onClick={() => setShowForm(true)}>
          Add New Book
        </button>
      )}
      <div>
        {books.map((book, idx) => (
          <BookCard
            key={idx}
            book={book}
            onEdit={() => handleEditBook(idx)}
            onDelete={() => handleDeleteBook(idx)}
          />
        ))}
      </div>
    </>
  )
}

export default App
