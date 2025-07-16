import { awarded2025 } from '../../../data'
import { NewCarousel } from '../../NewCarousel'
import { Card } from './Card'

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
