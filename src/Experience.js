import { Float, OrbitControls, Sky, Text, useTexture } from "@react-three/drei";
import Pyramid from "./Pyramid";

export default function Experience() {
  const texture = useTexture("/static/sand.jpg");

  return (
    <>
      <OrbitControls
        makeDefault
        minDistance={55}
        maxDistance={60}
        minPolarAngle={1}
        maxPolarAngle={1.5}
      />

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

      <Pyramid />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={100}>
        <planeGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>

      <Float speed={5}>
          <Text
            position={[0, 28, 5]}
            scale={3}
            font="/static/chakra-petch.woff"
            fontSize={1.5}
            color="white"
          >
            Civilización egipcia
          </Text>
      </Float>
    </>
  );
}
