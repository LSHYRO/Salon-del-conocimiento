export default function Photos({ photosGroup, year }) {
    console.log(photosGroup);
    console.log(year);
    if (!photosGroup || photosGroup.length === 0) {

        return <div className='secondary-text-color'>No hay fotos que mostrar</div>
    }
    return (
        <div className='photos-group'>
            <h1 className='title text-center'>Galeria {year}</h1>
            <div className='page-photos-galery'>
                {photosGroup.map((photo) => (
                    <img key={photo.id} src={photo.imageUrl} alt={`Photo ${photo.id}`}/>
                ))}
            </div>
        </div>
    );
}
