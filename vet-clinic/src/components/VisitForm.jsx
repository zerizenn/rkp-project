function VisitForm() {
  return (
    <form className="visit-form">
      <div className="form-group">
        <span className="form-legend">Питомец</span>
        <label>
          Имя
          <input type="text" name="petName" />
        </label>
        <label>
          Вид
          <input type="text" name="species" />
        </label>
        <label>
          Возраст
          <input type="number" min="0" name="age" />
        </label>
      </div>
 
      <div className="form-group">
        <span className="form-legend">Владелец</span>
        <label>
          Имя
          <input type="text" name="ownerName" placeholder="Имя Фамилия" />
        </label>
        <label>
          Телефон
          <input type="tel" name="ownerPhone" placeholder="+375(29)123-45-67" />
        </label>
      </div>
 
      <div className="form-group">
        <span className="form-legend">Врач</span>
        <label>
          Имя
          <select name="doctorName">
            <option value="">Выберите врача</option>
            <option value="Смирнова А.В.">Смирнова А.В.</option>
            <option value="Кузнецов Д.С.">Кузнецов Д.С.</option>
            <option value="Смирнов И.Д.">Смирнов И.Д.</option>
          </select>
        </label>
      </div>
 
      <button type="button" className="add-btn">
        Добавить приём
      </button>
    </form>
  )
}
 
export default VisitForm