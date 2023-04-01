import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function Cyber(props) {
  const { nodes } = useGLTF("/static/Pyramid.glb");
  const texture = useTexture("/static/texture.jpg");

  return (
    <group
      position-y={-4}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.2}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Pyramid_02_-_Default_0"].geometry}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Pyramid_01_-_Default_0"].geometry}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/static/Pyramid.glb");
