import  DownloadIcon from '../../assets/icons/ui/menu.svg?react';

export default function MinutesSection() {
    return (
        <section className="section minutes-section third-bg-color">
            <img src='/images/dump/Tigre-kawaii-300x300.jpg' alt='Tigre-kawaii-300x300.jpg' />
            <div className="minutes-text secondary-text-color">
                <h2 className="title secondary-text-color">ACTA SESIÓN EXTRAORDINARIA COMITE CIENTIFICO02-07.pdf</h2>
                <p>ACTA DE LA SESIÓN EXTRAORDINARIA DEL COMITÉ CIENTÍFICO DEL CONGRESO
                    ESTATAL DE GÉNERO, CIENCIA, HUMANIDADES, TECNOLOGÍA E INNOVACIÓN
                    2025</p>
                <a href="/Documents/ACTA_SESIÓN_EXTRAORDINARIA-COMITÉ_CIENTÍFICO02-07.pdf" download="acta_sesion.pdf"> Descargar 
                <DownloadIcon style={{color: 'blue'}} />
                </a>
                
            </div>
        </section>
    );
}
