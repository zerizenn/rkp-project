import { useState } from 'react'
import VisitForm from './components/visitForm'
import VisitTable from './components/visitTable'
import './App.css'

function App() {
  return (
    <>
    <section id="clinic">
      <h1>Ветеринарная клиника</h1>

      <VisitForm />

      <h2>Приёмы</h2>

      <VisitTable />
    </section>
    </>
  )
}

export default App