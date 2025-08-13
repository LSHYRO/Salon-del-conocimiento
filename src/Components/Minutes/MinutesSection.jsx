//import  DownloadIcon from '../../assets/icons/ui/menu.svg?react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function MinutesSection() {
    return (
        <section className="section minutes-section third-bg-color">
            <img src='/images/minutes/acta_sesion_Portada.png' alt='Acta Sesión Portada' />
            <div className="minutes-text secondary-text-color">
                <h2 className="title secondary-text-color">ACTA SESIÓN EXTRAORDINARIA COMITE CIENTIFICO02-07.pdf</h2>
                <p>ACTA DE LA SESIÓN EXTRAORDINARIA DEL COMITÉ CIENTÍFICO DEL CONGRESO
                    ESTATAL DE GÉNERO, CIENCIA, HUMANIDADES, TECNOLOGÍA E INNOVACIÓN
                    2025</p>
                <a href="/Documents/ACTA_SESIÓN_EXTRAORDINARIA-COMITÉ_CIENTÍFICO02-07.pdf" download="ACTA SESIÓN EXTRAORDINARIA COMITE CIENTIFICO02-07.pdf" className='download-text'> Descargar 
                <FontAwesomeIcon icon={faDownload} className="download-icon" />
                </a>
                
            </div>
        </section>
    );
}
