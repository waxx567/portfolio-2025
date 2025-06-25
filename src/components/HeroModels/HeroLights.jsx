import React from 'react'

const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.2} color='#1A1A40' />
      <directionalLight position={[5, 5, 5]} intensity={2} />
    </>
  )
}

export default HeroLights