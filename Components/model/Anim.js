/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react/cjs/react.development'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('model/anim.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions);
    actions.anim.play()
    
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh geometry={nodes.Ch42__Eyelashes.geometry} material={nodes.Ch42__Eyelashes.material} skeleton={nodes.Ch42__Eyelashes.skeleton} />
          <skinnedMesh geometry={nodes.Ch42_Body1.geometry} material={nodes.Ch42_Body1.material} skeleton={nodes.Ch42_Body1.skeleton} />
          <skinnedMesh geometry={nodes.Ch42_Hair1.geometry} material={nodes.Ch42_Hair1.material} skeleton={nodes.Ch42_Hair1.skeleton} />
          <skinnedMesh geometry={nodes.Ch42_Shirt.geometry} material={nodes.Ch42_Shirt.material} skeleton={nodes.Ch42_Shirt.skeleton} />
          <skinnedMesh geometry={nodes.Ch42_Shorts.geometry} material={nodes.Ch42_Shorts.material} skeleton={nodes.Ch42_Shorts.skeleton} />
          <skinnedMesh geometry={nodes.Ch42_Sneakers.geometry} material={nodes.Ch42_Sneakers.material} skeleton={nodes.Ch42_Sneakers.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('model/anim.glb')