import { useState } from 'react'
import VisitForm from './components/visitForm'
import VisitTable from './components/visitTable'
import './App.css'

const initialVisits = [
  {
    id: 1,
    petName: 'Барсик',
    species: 'Кот',
    age: '3',
    ownerName: 'Иван Петров',
    ownerPhone: '+375(33)345-60-12',
    doctorName: 'Смирнова А.В.',
  },
  {
    id: 2,
    petName: 'Рекс',
    species: 'Собака',
    age: '5',
    ownerName: 'Мария Орлова',
    ownerPhone: '+375(29)123-45-67',
    doctorName: 'Кузнецов Д.С.',
  },
]

function App() {
  const [visits, setVisits] = useState(initialVisits)
  const [nextId, setNextId] = useState(initialVisits.length + 1)

  function handleAddVisit(formData) {
    const newVisit = {
      id: nextId,
      ...formData,
    }

    setVisits((prev) => [...prev, newVisit])
    setNextId((prev) => prev + 1)
  }

  function handleDeleteVisit(id) {
    setVisits((prev) => prev.filter((visit) => visit.id !== id))
  }

  return (
    <section id="clinic">
      <h1>Ветеринарная клиника</h1>

      <VisitForm onAddVisit={handleAddVisit} />

      <h2>Приёмы</h2>

      <VisitTable visits={visits} onDeleteVisit={handleDeleteVisit} />
    </section>
  )
}

export default App