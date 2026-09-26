function VisitRow({ visit, rowNumber, onDeleteVisit  }) {
  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{visit.petName}</td>
      <td>{visit.species}</td>
      <td>{visit.age}</td>
      <td>{visit.ownerName}</td>
      <td>{visit.ownerPhone}</td>
      <td>{visit.doctorName}</td>
      <td>
        <button type="button" className="delete-btn" onClick={() => onDeleteVisit(visit.id)}>
          Удалить
        </button>
      </td>
    </tr>
  )
}

export default VisitRow