import { useState } from 'react'

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

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.petName || !form.species || !form.age || !form.ownerName || !form.ownerPhone || !form.doctorName) {
      alert('Заполните все поля формы')
      return
    }

    onAddVisit(form)
    setForm(emptyForm)
  }

  return (
    <form className="visit-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <span className="form-legend">Питомец</span>
        <label>
          Имя
          <input type="text" name="petName" value={form.petName} onChange={handleChange} />
        </label>
        <label>
          Вид
          <input type="text" name="species" value={form.species} onChange={handleChange}/>
        </label>
        <label>
          Возраст
          <input type="number" min="0" name="age" value={form.age} onChange={handleChange}/>
        </label>
      </div>
 
      <div className="form-group">
        <span className="form-legend">Владелец</span>
        <label>
          Имя
          <input type="text" name="ownerName" value={form.ownerName} onChange={handleChange} />
        </label>
        <label>
          Телефон
          <input type="tel" name="ownerPhone" value={form.ownerPhone} onChange={handleChange} />
        </label>
      </div>
 
      <div className="form-group">
        <span className="form-legend">Врач</span>
        <label>
          Имя
          <select name="doctorName" value={form.doctorName} onChange={handleChange}>
            <option value="">Выберите врача</option>
            <option value="Смирнова А.В.">Смирнова А.В.</option>
            <option value="Кузнецов Д.С.">Кузнецов Д.С.</option>
            <option value="Смирнов И.Д.">Смирнов И.Д.</option>
          </select>
        </label>
      </div>
 
      <button type="submit" className="add-btn">
        Добавить приём
      </button>
    </form>
  )
}
 
export default VisitForm