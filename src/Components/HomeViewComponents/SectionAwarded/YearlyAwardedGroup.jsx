// components/AwardedSection/YearlyAwardGroup.jsx

import { Card } from './Card'

// Este componente recibe la lista de galardonadas de UN solo año
export function YearlyAwardGroup({ awardeds }) {
  return (
    // Este div es el "item" del carrusel. Usamos flexbox o grid para alinear las tarjetas adentro.
    <div className='yearly-award-group'>
      {awardeds.map(award => (
        <Card
          key={award.id}
          id={award.id}
          area={award.area}
          imageUrl={award.imageUrl}
          name={award.name}
        />
      ))}
    </div>
  )
}