import React from 'react'
import TextCard from '../../TextCard'

export default function ImportanceSection ({id}) {
  return (
    <section className='section secondary-bg-color' id={id}>
      
      <div className='importance-section'>   
        <div className='importance-text'>
          <h1 className='title'>IMPORTANCIA</h1>
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
        <img src='/images/importance/woman_a.png' alt='Woman_A' width="60%"/>
      </div>
    </section>
  )
}
