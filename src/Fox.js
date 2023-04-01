import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const Fox = (props) => {
  const { animations, scene } = useGLTF("/static/Fox.glb");
  const foxAnimations = useAnimations(animations, scene);

  useEffect(() => {
    const action = foxAnimations.actions.Walk;
    action.play();
  }, []);

  return (
    <primitive object={scene} scale={0.02} position-y={-1} rotation-y={8} />
  );
};
export default Fox;
useGLTF.preload("/static/Robot.glb");