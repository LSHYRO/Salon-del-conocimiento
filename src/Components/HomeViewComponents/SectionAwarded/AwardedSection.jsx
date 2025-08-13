import { awarded2025 } from '../../../data'
import { awardedData } from '../../../data'
import { NewCarousel } from '../../NewCarousel'
import { Card } from './Card'
import { useState } from 'react'
import { YearlyAwardGroup } from './YearlyAwardedGroup'

const itemsPerYear = 3;

export function AwardedSection ({id}) {
  // 2. Estado para guardar el año actual, inicializado con el primer año de la lista
  const [currentYear, setCurrentYear] = useState(awardedData.length > 0 ? awardedData[0].anio : '')

  // 3. Creamos una lista plana de TODAS las tarjetas.
  // Usamos flatMap para iterar sobre cada año y luego sobre sus galardonadas.
  const listAwarded = awardedData.flatMap(yearData =>
    yearData.awardeds.map(award => (
      <Card key={award.id} id={award.id} area={award.area} imageUrl={award.imageUrl} name={award.name} to={award.url} />
    ))
  )

  // 4. Función que se ejecutará después de cada cambio de slide
  const handleAfterChange = (previousSlide, { currentSlide }) => {
    // Calculamos el índice del año basándonos en la diapositiva actual
    const yearIndex = Math.floor(currentSlide / itemsPerYear)
    
    // Verificamos que el índice sea válido
    if (awardedData[yearIndex]) {
      // Actualizamos el estado con el nuevo año
      setCurrentYear(awardedData[yearIndex].anio)
    }
  }

  return (
    <section className='third-bg-color section awarded-section' id={id}>
      {/* 5. El título ahora es dinámico y usa el estado */}
      <h1 className='title secondary-text-color text-center'>
        Galardonadas {currentYear}
      </h1>

      <div className='carousel-container-section'>
        {/* 6. Pasamos la lista de tarjetas y la función handleAfterChange al carrusel */}
        <NewCarousel items={listAwarded} afterChange={handleAfterChange} />
      </div>
    </section>
  )
}
/*
export function AwardedSection () {
  const listAwarded = awarded2025.map(award =>
    <Card key={award.id} id={award.id} area={award.area} imageUrl={award.imageUrl} name={award.name} />
  )
  return (
    <section className='third-bg-color section'>
      <h1 className='title secondary-text-color text-center'>Galardonadas 2025</h1>
      <div className='carousel-container-section'>
        <NewCarousel items={listAwarded} />
      </div>
    </section>
  )
}
  */
