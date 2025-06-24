import { Canvas } from '@react-three/fiber'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { words } from '../constants/index.js'
import { OrbitControls } from '@react-three/drei'

const Hero = () => {
  const isTablet = false;
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='../images/bg.png' alt='background' />
      </div>

      <div className='hero-layout'>

        {/* LEFT: HERO CONTENT */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
                <h1>
                  Shaping
                  <span className='slide'>
                    <span className='wrapper'>
                      {words.map((word) => (
                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                          <img 
                            src={word.imgPath}
                            alt={word.text} 
                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                          />

                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Hi, I'm Wayne, a developer based in South Africa with a passion for code.
            </p>
            <Button 
              className='md:w-80 md:h-16 w-60 h-12'
              id='button'
              text='See my Work'
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2} color='#1A1A40' />
            <directionalLight position={[5, 5, 5]} intensity={5} />

            <OrbitControls 
              enablePan={false}
              enableZoom={!isTablet}
              maxDistance={20}
              minDistance={5}
              minPolarAngle={Math.PI / 5}
              maxPolarAngle={Math.PI / 2}
            />
            
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color='teal' />
            </mesh>
          </Canvas>
        </figure>
      </div>
    </section>
  )
}

export default Hero
