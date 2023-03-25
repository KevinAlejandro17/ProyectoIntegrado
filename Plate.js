import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Plate = () => {
    const { nodes, materials } = useGLTF("/static/Plato.max");
    console.log(nodes);

    return (
        <mesh
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
          />
    )
}

useGLTF.preload("/static/Plato.max");
export default Plate