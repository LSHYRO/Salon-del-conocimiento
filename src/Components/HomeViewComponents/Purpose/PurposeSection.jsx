import TextCard from '../../TextCard'

export default function PurposeSection () {
  return (
    <div>
      <section className='section third-bg-color purpose-section'>
        <h1 className='title secondary-text-color'>PROPÓSITO</h1>
      </section>
      <div className='purpose-container'>
        <img className='purpose-image' src='/images/Purpose_image.png' alt='Purpose_image.png' />
        <div className='purpose-text-card'>
          <TextCard
            paragraph='Distinguir a quienes se han destacado en el ámbito de las ciencias, a lo largo de su trayectoria académica.'
            secondaryColor
          />
        </div>
      </div>
    </div>
  )
}
