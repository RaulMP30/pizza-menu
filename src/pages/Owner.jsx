import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import style from './styles/owner.module.css'

export default function Owner() {
  const [peliculas, setPeliculas] = useState([
    'Paul',
    'Interestelar',
    'Shrek',
    'Saga de Harry Potter',
    'Rápidos y furiosos 1'
  ])

  return (
    <div className={`${divStyle}}>
      <section className="sectionStyle">
        <img src="https://cdn.pixabay.com/photo/2023/05/30/15/42/capybara-8028980_1280.jpg" alt="Capibara" className="imageStyle" />
        <h2 className="h2Style">Raúl Maldonado</h2>
        <p className="pStyle"><strong>Correo:</strong>r.maldonadop95@gmail.com</p>
        <p className="pStyle">Soy desarrollador web en formación, me apasiona el desarrollo con JavaScript, React y el backend con Java.</p>
      </section>

      <section style={sectionStyle}>
        <h3>Mis películas favoritas</h3>
        <ul>
          {peliculas.map((peli, index) => (
            <li key={index}>{peli}</li>
          ))}
        </ul>
      </section>
    </div>

  )
}