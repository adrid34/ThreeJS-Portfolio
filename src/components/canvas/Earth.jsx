import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Loader'

const Earth = () => {

  const earth = useGLTF('./little_planet_earth/scene.gltf');

  return (

    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <ambientLight intensity={0.6} />

      <pointLight position={[-20, 20, 10]} intensity={2} />
      {/* <spotLight position={[-20, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} /> */}
      <primitive object={earth.scene} scale={0.0035} position={[0, 0, 1.7]} rotation-y={0} />

    </mesh>

  )
}


const EarthCanvas = () => {

  return (

    <Canvas shadows frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true, }} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }} >

      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls autoRotate autoRotateSpeed={8} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />

        <Preload all />
      </Suspense>

    </Canvas>

  )

}


export default EarthCanvas