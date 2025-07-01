// - Loads a `.glb` model (GLTF format)
// - Adds basic lighting
// - Applies environment reflections for realism
// - Wraps the model in a floating animation
// - Optionally tweaks the material (like setting a white colour on a specific mesh)
// - Disables zoom using OrbitControls

import { Environment, Float, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset='city' />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon