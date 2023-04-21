import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  Sky,
  Text,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";

import React, { useCallback, useState } from "react";

import VideoWall from "./VideoWall";
import ImageWall from "./ImageWall";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <Sky
        distance={45000}
        sunPosition={[1, -0.35, -10]}
        inclination={0}
        azimuth={0.25}
        elevation={1}
        rayleigh={3}
      />

      <directionalLight position={[1, 5, 1]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-y={-1.5} rotation-x={-Math.PI * 0.5} scale={5}>
        <planeGeometry />
        <meshStandardMaterial />
      </mesh>

      <VideoWall />
      <ImageWall />
    </>
  );
}

export default Experience;