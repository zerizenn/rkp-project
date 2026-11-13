import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import VisitForm from '../components/VisitForm'
import VisitTable from '../components/VisitTable'
import { showVisits, createVisit, deleteVisit } from '../store/actions/visitsActions'

function Visits() {
  const visits = useSelector(state => state.visits.visits)
  const loading = useSelector(state => state.visits.loading)
  const error = useSelector(state => state.visits.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showVisits())
  }, [dispatch])

  function handleAddVisit(formData) {
    return dispatch(createVisit(formData)).unwrap()
  }

  function handleDeleteVisit(id) {
    dispatch(deleteVisit(id))
  }

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка: {error}</p>

  return (
    <section id="clinic" className="clinic-page">
      <h1>Ветеринарная клиника</h1>
      <VisitForm onAddVisit={handleAddVisit} />
      <h2>Приёмы</h2>
      <VisitTable visits={visits} onDeleteVisit={handleDeleteVisit} />
    </section>
  )
}

export default Visits