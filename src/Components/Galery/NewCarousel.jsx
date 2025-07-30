import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { responsive } from '../../js/galerydata';

export function NewCarousel ({ items }) {
  if (!items || items.length === 0) {
    return <div className='secondary-text-color'>No items to display</div>
  }
  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      containerClass='carousel-container'
      itemClass='carousel-item'
      sliderClass='carousel-slider'
    >
      {items}
    </Carousel>
  )
}
