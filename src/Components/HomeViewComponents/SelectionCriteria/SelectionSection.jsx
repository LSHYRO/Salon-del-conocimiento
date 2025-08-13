import TextCard from '../../TextCard'
import { Card } from './Card'

export default function SelectionSection({id}) {
    return (
        <section className='section third-bg-color selection-section' id={id}>
            <h1 className='title secondary-text-color'>CRITERIOS DE SELECCIÓN</h1>
            <div className='secondary-text-color'>
                <p className='selection-text'>
                    ESTE GALARDÓN PUEDE SER RECIBIDO POR CIENTÍFICAS DE LAS CIENCIAS HUMANAS Y SOCIALES; EXACTAS Y NATURALES; INGENIERÍA Y
                    TECNOLOGÍA, NACIDAS O RADICADAS EN EL ESTADO DE OAXACA.
                </p>
            </div>
            <div className='selection-container'>
                <div className='div-title-selection-criteria'>
                    <TextCard title='CRITERIOS PARA PROPONER CANDIDATURAS:' thirdColor textCardSelection
                    />
                </div>
                <div className='selection-criteria-cards'>
                    <Card id={1} imageUrl='/images/criteria/trayectory.png' name='Trayectoria académica y méritos científicos' />
                    <Card id={2} imageUrl='/images/criteria/contribution.png' name='Contribuciones a su línea de generación o aplicación de conocimientos' />
                    <Card id={3} imageUrl='/images/criteria/aportation.png' name='Aportaciones para explicar y solucionar los retos de su contexto' />
                </div>
                <div className='selection-candidates-container'>
                    <div className='selection-candidates-cards'>
                        <div className='title-selection-candidates'>
                            <TextCard title='SELECCIÓN DE CANDIDATURAS:' thirdColor textCardSelection
                            />
                        </div>
                        <TextCard prymaryColor
                            paragraph='La Coordinación del Congreso priorizará las propuestas considerando la edad y estado de salud de las candidatas, así como el reconocimiento a mujeres de los tres campos.' />
                        <TextCard prymaryColor
                            paragraph='Las propuestas no seleccionadas permanecerán elegibles para el año siguiente.
'                        />
                        <TextCard prymaryColor 
                            paragraph='Todas las instituciones que forma parte del Comité Científico tendrán la misma oportunidad de proponer a más candidatas que consideren para esta distinción.'
                        />
                    </div>
                    <img className='img-selection-candidates' src='/images/criteria/selection.jpg' alt='Purpose_image.png' />
                </div>
            </div>
        </section>
    )
}