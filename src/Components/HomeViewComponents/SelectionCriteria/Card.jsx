export function Card({ id, imageUrl, name }) {
    return (
        <article className='card'>
            <img className='picture' src={imageUrl} alt={id} />
            <div className='third-bg-color '>
                <h5 className='limited-title secondary-text-color'>{name}</h5>
            </div>
        </article>
    )
}
