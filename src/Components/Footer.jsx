export function Footer () {
  return (
    <footer className='footer-wrapper bg-color-primary'>
      <div className='footer-container'>
        <section className='footer-section'>
          <h3>Aqui iria el logo de la institucion</h3>
          <div>
            <p>Dirección: Calle Falsa 123, Ciudad, País</p>
            <h3>Contacto</h3>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: </p>
          </div>
        </section>
        <section className='footer-section'>
          <h3>Enlaces</h3>
          <ul>
            <li><a href='#home'>Inicio</a></li>
            <li><a href='#about'>Acerca de</a></li>
            <li><a href='#services'>Servicios</a></li>
            <li><a href='#contact'>Contacto</a></li>
          </ul>
        </section>
        <section className='footer-section'>
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
            <li><a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
            <li><a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
