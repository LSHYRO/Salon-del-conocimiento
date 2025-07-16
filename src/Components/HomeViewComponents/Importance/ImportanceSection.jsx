import React from 'react'
import TextCard from '../../TextCard'

export default function ImportanceSection () {
  return (
    <section className='section secondary-bg-color'>
      <h1 className='title'>IMPORTANCIA</h1>
      <div className='importance-section'>
        <img src='/images/dump/Tigre-kawaii-300x300.jpg' alt='Tigre-kawaii-300x300.jpg' />
        <div className='importance-text'>
          <div>
            <TextCard
              title='1'
              prymaryColor
            />
            <TextCard
              paragraph='Dignifica la aportación y acrecienta la visibilidad de las mujeres científicas en el estado de Oaxaca.'
              secondaryColor
            />
          </div>
          <div>
            <TextCard
              title='2'
              prymaryColor
            />
            <TextCard
              paragraph='Promueve modelos a seguir para futuras generaciones de mujeres profesionales científicas.'
              secondaryColor
            />
          </div>
          <div>
            <TextCard
              title='3'
              prymaryColor
            />
            <TextCard
              paragraph='Cuestiona las disparidades de género en la sociedad y contribuye a la igualdad sustantiva en la educación y la ciencia.'
              secondaryColor
            />
          </div>
        </div>
      </div>
    </section>
  )
}
