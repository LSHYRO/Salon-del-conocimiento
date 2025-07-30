import LogoCard from "./LogoCard";

export default function ContactSection() {
    return (
        <section className='section primary-bg-color'>
            <div className="contact-dist">
                <form className="contact-form third-text-color">
                    <label>Nombre: </label>
                    <input type="text" placeholder="Tu nombre" />
                    <label>Correo electronico: </label>
                    <input type="email" placeholder="Tu correo electronico" />
                    <label>Mensaje: </label>
                    <textarea placeholder="Tu mensaje"></textarea>
                    <button type="submit" className="secondary-bg-color">Enviar</button>
                </form>
                <div className="galery-logos">
                    <LogoCard logoUrl={"/images/logos/ito.png"}/>
                    <LogoCard logoUrl={"/images/logos/unam.webp"}/>
                    <LogoCard logoUrl={"/images/logos/ipn.png"}/>
                    <LogoCard logoUrl={"/images/logos/uabjo.png"}/>
                    <LogoCard logoUrl={"/images/logos/ciesas.png"}/>
                    <LogoCard logoUrl={"/images/logos/ibero.png"}/>
                    <LogoCard logoUrl={"/images/logos/urse.png"}/>
                    <LogoCard logoUrl={"/images/logos/suneo.png"}/>
                    <LogoCard logoUrl={"/images/logos/meso.png"}/>
                    <LogoCard logoUrl={"/images/logos/anahuac.png"}/>
                    <LogoCard logoUrl={"/images/logos/ulsa.png"}/>
                    <LogoCard logoUrl={"/images/logos/sep.png"}/>
                </div>
            </div>
        </section>
    );
}