import {
  OrbitControls,
  MeshReflectorMaterial,
  Text,
  Sky,
  Stars,
} from "@react-three/drei";
import Fox from "./Fox";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault enablePan={false} maxPolarAngle={1.5} />
      <Sky
        distance={45000}
        sunPosition={[1, -0.05, 1.2]}
        inclination={0}
        azimuth={0.25}
        elevation={1}
        rayleigh={3}
        
      />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Fox />

      <mesh rotation-x={-Math.PI * 0.5} scale={100} position-y={-1}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.6}
          color={"greenyellow"}
        />
      </mesh>
    </>
  );
}
