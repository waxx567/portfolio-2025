import React from 'react'

const HeroLights = () => {
  return (
    <>
      <spotLight 
       position={[2, 5, 6]}
       angle={0.15}
       intensity={100} 
       penumbra={0.2}
       color='#ffffff'
      />
      
      <spotLight 
       position={[4, 5, 4]}
       angle={0.3}
       intensity={40} 
       penumbra={0.5}
       color='#4cc9f0'
      />
    </>
  )
}

export default HeroLights