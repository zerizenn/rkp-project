import VisitRow from './VisitRow'

const visits = [
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

function VisitTable({ visits, onDeleteVisit }) {
  return (
    <table className="visits-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Питомец</th>
          <th>Вид</th>
          <th>Возраст</th>
          <th>Владелец</th>
          <th>Телефон</th>
          <th>Врач</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {visits.length === 0 ? (
          <tr>
            <td colSpan="8" style={{ textAlign: 'center' }}>
              Пока нет ни одного приёма
            </td>
          </tr>
        ) : (
          visits.map((visit, index) => (
            <VisitRow key={visit.id} visit={visit} rowNumber={index + 1} onDeleteVisit={onDeleteVisit}/>
          ))
        )}
      </tbody>
    </table>
  )
}

export default VisitTable