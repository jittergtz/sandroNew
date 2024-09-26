"use client"

import React from 'react'
import { Canvas, useGraph } from '@react-three/fiber'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Particles(props) {
  const { scene } = useGLTF('/Particles.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <Canvas>
    <group {...props} dispose={null}>
      <group scale={1.01}>
        <directionalLight intensity={2.7} decay={2} rotation={[-0.506, 0.629, 0.756]} target={nodes.Directional_Light.target}>
          <primitive object={nodes.Directional_Light.target} position={[0, 0, -1]} />
        </directionalLight>
        <OrthographicCamera makeDefault={false} far={100000} near={0} position={[1056.534, -221.771, 159.937]} rotation={[2.695, 1.544, -2.695]} />
      </group>
    </group>
    </Canvas>
  )
}

useGLTF.preload('/Particles.gltf')
