// - Loads a `.glb` model (GLTF format)
// - Adds basic lighting
// - Applies environment reflections for realism
// - Wraps the model in a floating animation
// - Optionally tweaks the material (like setting a white colour on a specific mesh)
// - Disables zoom using OrbitControls

import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  return (
    <Canvas>
      
    </Canvas>
  )
}

export default TechIcon