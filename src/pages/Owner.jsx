import styles from '../components/styles/owner-style.module.css';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Owner() {
  const [peliculas, setPeliculas] = useState([
    '300',
    'Interestelar',
    'Saga de Shrek',
    'Saga de Harry Potter',
    'Paul'
  ]);

  const [nuevaPelicula, setNuevaPelicula] = useState('');

  const agregarPelicula = () => {
    const peliculaAgregada = nuevaPelicula.trim();
    if (peliculaAgregada !== '') {
      setPeliculas([...peliculas, peliculaAgregada]);
      setNuevaPelicula('');
    }
  };

  return (
    <div className={styles.ownerPage}>
      <Header />

      <main className={styles.ownerInfo}>
        <img
          src="https://cdn.pixabay.com/photo/2023/05/30/15/42/capybara-8028980_1280.jpg"
          alt="Foto personal" className={styles.ownerPhoto}
        />
        <h2>Raúl Maldonado</h2>
        <p><strong>Correo:</strong> r.maldonadop95@gmail.com</p>
        <p>
          Soy un desarrollador Java Fullstack en formación, buscando aprender más 😀
        </p>

        <section className={styles.movieList}>
          <h3>Mis Películas Favoritas</h3>

          <div className={styles.formulario}>
            <input
              type="text"
              placeholder="Nueva película"
              value={nuevaPelicula}
              onChange={(e) => setNuevaPelicula(e.target.value)}
              className={styles.input}
            />
            <button
              onClick={agregarPelicula}
              className={styles.botonAgregar}
            >
              Agregar
            </button>
          </div>

          <ul className={styles.favoriteMovies}>
            {peliculas.map((peli, index) => (
              <li key={index} className={styles.movieItem}>{peli}</li>
            ))}
          </ul>

        </section>
      </main>

      <Footer />
    </ div >
  );
}

export default Owner;