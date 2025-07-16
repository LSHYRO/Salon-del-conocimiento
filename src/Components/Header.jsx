import { useState } from 'react'

export function Header () {
  const [active, setActive] = useState(false)
  const className = `nav-links ${active ? 'active' : ''}`
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className='header bg-color-primary'>
      <ul className={className}>
        <li><a href='/'>GALARDONADAS</a></li>
        <li><a href='/about'>¿DE QUÉ SE TRATA?</a></li>
        <li><a href='/contact'>PROPÓSITO</a></li>
        <li><a href='/contact'>IMPORTANCIA</a></li>
        <li><a href='/contact'>CRITERIOS DE SELECCIÓN</a></li>
        <li><a href='/contact'>GALERÍA</a></li>
      </ul>
      <button onClick={handleClick} className='menu-toggle'>
        <img src='/assets/icons/ui/menu.svg' alt='Menú' className='w-6 h-6' />
      </button>
    </nav>
  )
}
