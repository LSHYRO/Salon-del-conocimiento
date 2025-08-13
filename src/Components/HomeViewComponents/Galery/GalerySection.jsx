import { NewCarousel } from "./NewCarousel";
import {galeryPhotos} from '../../../js/galeryData';
import Photos from "./Photos";

export default function GalerySection({id}) {
    const listGalery = galeryPhotos.map(photo => 
        <Photos key={photo.id} photosGroup={photo.photos} year={photo.año} />
    );
    return (
        <section className='section secondary-bg-color' id={id}>
            {/*<h1 className='title text-center'>Galeria 2025</h1>*/}
            <div className='carousel-container-section-galery'>
                <NewCarousel items={listGalery} />
            </div>
        </section>

    );
}