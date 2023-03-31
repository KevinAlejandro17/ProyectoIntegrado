
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cyber(props) {
  const { nodes, materials } = useGLTF("/static/Pyramid.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.0129314} position-y={-1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0.71042252, 0, 0.05725479]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Pyramid_02_-_Default_0"].geometry}
              material={materials["02_-_Default"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Pyramid_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/Pyramid.glb");
