import React, { useState, useRef } from "react";
import { Text, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';

const ImageWall = () => {
  const [imageSrc, setImageSrc] = useState('https://picsum.photos/800/800');

  const texture = useTexture(imageSrc);

  const handleClick = () => {
    let index = Math.floor(Math.random() * 5) + 1;
    setImageSrc(`/static/${index}.jpg`)
  };

  return (
    <>
      <Text
        position={[2.5, 4, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
        scale={0.5}
      >
        Imagen
      </Text>

      <mesh
        position={[2.5, 1, 0]}
        scale={5}
        rotation={[0, -Math.PI * 0.5, 0]}
        onPointerEnter={handleClick}
      >
        <planeGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default ImageWall;
