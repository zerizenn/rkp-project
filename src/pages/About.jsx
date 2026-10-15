import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-paw">🐾</span>

        <h1>О ветеринарной клинике VetClinic</h1>

        <p>
          Забота о здоровье питомцев — наша главная задача!
        </p>
      </section>

      <section className="about-card">
        <h2>Наша клиника</h2>

        <p>
          VetClinic — ветеринарная клиника, где домашние
          животные получают внимание, заботу и необходимую
          ветеринарную помощь.
        </p>

        <p>
          Мы стремимся создать комфортные условия для
          питомцев и их владельцев, а также помочь
          сохранить здоровье четвероногих друзей.
        </p>
      </section>

      <section className="about-card">
        <h2>Наши услуги</h2>

        <ul>
          <li>🐶 Осмотр собак и кошек</li>
          <li>🐱 Консультации ветеринарного врача</li>
          <li>🩺 Диагностика состояния животных</li>
          <li>💊 Назначение лечения</li>
          <li>📋 Учёт питомцев и посещений</li>
        </ul>
      </section>

      <section className="about-card">
        <h2>Наши преимущества</h2>

        <ul>
          <li>Индивидуальный подход к каждому питомцу</li>
          <li>Внимательное отношение к животным</li>
          <li>Удобный учёт посещений клиники</li>
          <li>Забота о питомцах и их владельцах</li>
        </ul>
      </section>

      <p className="about-footer">
        VetClinic — здоровье питомцев начинается с заботы ❤️
      </p>

        <Link className="demo-link" to="/login">
            Перейти к входу.
        </Link>
    </div>
  )
}

export default About