import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function Fox(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/Fox.glb");

  return (
    <group ref={group} {...props} dispose={null} scale={0.1} position-z={-10}>
        <group name="root">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh 
            name="fox"
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
          />
        </group>
    </group>
  );
}

useGLTF.preload("/Fox.glb");
export default Fox;