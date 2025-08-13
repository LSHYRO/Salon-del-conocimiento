import TextCard from '../../TextCard'

export function AboutSection ({id}) {
  return (
    <section className='section secondary-bg-color about-section' id={id}>
      <h1 className='title'>¿De qué se trata?</h1>
      <div className='about-text'>
        <p>
          Se trata de una Ceremonia anual, realizada en el marco del Congreso Estatal de Ciencia, Humanidades, Tecnología e Innovación de Oaxaca,
          a partir del 2025.
        </p>
        <br />
        <p>
          En esta Ceremonia, a propuesta de quienes integran el Comité Científico, se distinguirá a tres mujeres científicas ingresándolas al
          “Salón del Conocimiento” del estado en las siguientes áreas:
        </p>
      </div>
      <div className='about-text-cards'>
        <TextCard
          paragraph='Ciencias sociales'
          prymaryColor
          textcenter
        />
        <TextCard
          paragraph='Ciencias naturales, experimentales y tecnología'
          prymaryColor
          textcenter
        />
        <TextCard
          paragraph='Humanidades'
          prymaryColor
          textcenter
        />
      </div>
      <img className='about-img' src='/images/logo_salón_del_conocimiento.png' alt='logo_salón_del_conocimiento.png' />
    </section>
  )
}
