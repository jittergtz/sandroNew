"use client"


import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/tfmpHqbyPX3V-67c/scene.splinecode')
  return (
    <>
    <Canvas>
        <Suspense>
      <color attach="background" args={['#000000']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <mesh
            name="Platinum"
            geometry={nodes.Platinum.geometry}
            material={materials['Platinum Material']}
            castShadow
            receiveShadow
            position={[20, 89.99, 0]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
      </Suspense>
      </Canvas>
    </>
  )
}
