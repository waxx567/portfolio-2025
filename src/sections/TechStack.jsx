import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'

const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
         title='My Preferred Tech Stack' 
         sub='🤝 The Skills I Acquired'
        />

        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
              {icon.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack