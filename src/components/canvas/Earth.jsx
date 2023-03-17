import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Loader'

const Earth = () => {

  const earth = useGLTF('./world_earth_planet/scene.gltf');

  return (

    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[ -20, 50, 10 ]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
    <primitive object={ earth.scene } scale={0.07} position-y={0} rotation-y={0} />

    </mesh>

  )
}


const EarthCanvas = () => {

  return (

    <Canvas shadows frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true, }} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }} >
      
      <Suspense fallback={ <CanvasLoader /> } >
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={ Math.PI / 2 } minPolarAngle={ Math.PI / 2 } />
        <Earth />

        <Preload all />
      </Suspense>

    </Canvas>

  )

}


export default EarthCanvas