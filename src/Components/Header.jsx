import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function Header () {
  const [active, setActive] = useState(false)
  const className = `nav-links ${active ? 'active' : ''}`
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className='header bg-color-primary'>
      <ul className={className}>
        <li><Link to='/#AwardedSection'>GALARDONADAS</Link></li>
        <li><Link to='/#AboutSection'>¿DE QUÉ SE TRATA?</Link></li>
        <li><Link to='/#PurposeSection'>PROPÓSITO</Link></li>
        <li><Link to='/#ImportanceSection'>IMPORTANCIA</Link></li>
        <li><Link to='/#SelectionSection'>CRITERIOS DE SELECCIÓN</Link></li>
        <li><Link to='/#GalerySection'>GALERÍA</Link></li>
      </ul>
      <button onClick={handleClick} className='menu-toggle'>
       {/* <img src='./assets/icons/ui/menu.svg' alt='Menú' className='w-6 h-6' /> */}
       <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </button>
    </nav>
  )
}
