export function Card ({ id, area, imageUrl, name }) {
  return (
    <article className='card'>
      <div className='primary-bg-color vertical-align'>
        <h2 className='limited-title'>{area}</h2>
      </div>
      <img className='picture' src={imageUrl} alt={id} />
      <div className='secondary-bg-color vertical-align'>
        <h2 className='limited-title'>{name}</h2>
      </div>
    </article>
  )
}
