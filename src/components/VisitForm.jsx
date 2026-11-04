import { useEffect, useRef, useState } from 'react'
import doctors from '../doctors'
import Spinner from './Spinner'

const emptyForm = {
  petName: '',
  species: '',
  age: '',
  ownerName: '',
  ownerPhone: '',
  doctorName: '',
}

function VisitForm({ onAddVisit }) {
  const [form, setForm] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitTimeout = useRef(null)

  useEffect(() => {
    return () => window.clearTimeout(submitTimeout.current)
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) return

    if (!form.petName || !form.species || !form.age || !form.ownerName || !form.ownerPhone || !form.doctorName) {
      alert('Заполните все поля формы')
      return
    }

    setIsSubmitting(true)
    submitTimeout.current = window.setTimeout(() => {
      onAddVisit(form)
      setForm(emptyForm)
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <form className="visit-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <span className="form-legend">Питомец</span>
        <label>
          Имя
          <input type="text" name="petName" value={form.petName} onChange={handleChange} disabled={isSubmitting} />
        </label>
        <label>
          Вид
          <input type="text" name="species" value={form.species} onChange={handleChange} disabled={isSubmitting} />
        </label>
        <label>
          Возраст
          <input type="number" min="0" name="age" value={form.age} onChange={handleChange} disabled={isSubmitting} />
        </label>
      </div>
 
      <div className="form-group">
        <span className="form-legend">Владелец</span>
        <label>
          Имя
          <input type="text" name="ownerName" value={form.ownerName} onChange={handleChange} disabled={isSubmitting} />
        </label>
        <label>
          Телефон
          <input type="tel" name="ownerPhone" value={form.ownerPhone} onChange={handleChange} disabled={isSubmitting} />
        </label>
      </div>
 
      <div className="form-group">
        <span className="form-legend">Врач</span>
        <label>
          Имя
          <select name="doctorName" value={form.doctorName} onChange={handleChange} disabled={isSubmitting}>
            <option value="">Выберите врача</option>
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </label>
      </div>
 
      <button type="submit" className="add-btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner label="Добавляем приём" />
            Добавляем...
          </>
        ) : (
          'Добавить приём'
        )}
      </button>
    </form>
  )
}
 
export default VisitForm