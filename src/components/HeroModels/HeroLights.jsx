import React from 'react'

const HeroLights = () => {
  return (
    <>
      <spotLight 
       position={[2, 5, 6]}
       angle={0.15}
       intensity={100} 
       penumbra={0.2}
       color='white'
      />
    </>
  )
}

export default HeroLights