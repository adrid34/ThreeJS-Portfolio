import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'


const SoullesFace = ({ isMobile }) => {

  const soul = useGLTF('./sci-fi_computer/scene.gltf');

  return (

    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight position={[-20, 50, -50]} intensity={1} />
      <pointLight position={[20, -50, 50]} intensity={1} />
      <primitive object={soul.scene} scale={isMobile ? 1.6 : 2.8} position={isMobile ? [0, -3.5, 0.2] : [0, -0.5, 0.2]} />
    </mesh>

  )
}


const SoulCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = function (e) {

      setIsMobile(e.matches);

    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => { mediaQuery.removeEventListener('change', handleMediaQueryChange); }

  }, [])



  return (

    <Canvas style={{ marginLeft: isMobile ? 0 : '30%', width: isMobile ? '100%' : '70%' }} frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: false }}>

      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          enableZoom={false}
          maxZoom={[1]}
          autoRotate={true}
          autoRotateSpeed={8}
          enableRotate={true}
          maxPolarAngle={Math.PI / 10}
          minPolarAngle={Math.PI * 2 / 5} />
        <SoullesFace isMobile={isMobile} />
      </Suspense>

      <Preload all />

    </Canvas>

  )

}

export default SoulCanvas