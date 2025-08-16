import { Link } from 'react-router-dom';

export function Card({ id, area, imageUrl, name, to }) {
  return (
    <article className='card'>
      <Link to={to} className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='primary-bg-color vertical-align'>
          <h2 className='limited-title third-text-color'>{area}</h2>
        </div>
        <img className='picture' src={imageUrl} alt={id} />
        <div className='secondary-bg-color vertical-align'>
          <h2 className='limited-title third-text-color'>{name}</h2>
        </div>
      </Link>
    </article>
  )
}
