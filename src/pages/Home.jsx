import { Link } from 'react-router-dom'
import '../styles/styles.css'

export default function Home() {
  return (
    <div className="bg-[url('./assets/imgBg.jpg')] bg-cover h-screen">
      <div className="father">
        <div className="children">
          <h1>
            Está procurando um local confortável para se reunir com seus amigos
            e familiares? <br />
            Ou está pensando em adquir um imóvel?
          </h1>
          <br />
          <h3>Até mesmo para festas, com amigos e familiares.</h3>
          <br />
          <h3>Na YourHouse voce encontra tudo e mais um pouco. </h3>
          <br />
          <br />
          <Link to="/sign-in">
            <button className="btn">
              Faça seu login, e explore as oportunidades
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
