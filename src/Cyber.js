
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cyber(props) {
  const { nodes, materials } = useGLTF("/static/Robot.glb");
  return (
    <group {...props} >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04} position-z={-8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.StingrayPBS2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.StingrayPBS3SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/Robot.glb");