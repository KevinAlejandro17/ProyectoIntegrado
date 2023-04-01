import { MeshReflectorMaterial, OrbitControls, Sky, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import Door from './Door'
import Floor from './Floor'
import FoxModel from './FoxModel'

import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei'


export default function Experience() {
    const sphereRef = useRef();

    useFrame((state, delta) => {
        //sphereRef.current.position.y = 1 + Math.sin(state.clock.elapsedTime/0.5);
    });
   
    const directionalLightRef = useRef();

    const texture = useTexture("/static/BeachBallColor.jpg");

    useHelper(directionalLightRef, DirectionalLightHelper, 1)

    return <>
        <OrbitControls makeDefault enablePan={false} maxPolarAngle={1.5} />

        <Sky
            distance={45000}
            sunPosition={[1, -0.05, 1.2]}
            inclination={0}
            azimuth={0.25}
            elevation={1}
            rayleigh={3}

        />

        <directionalLight castShadow position={[15,20,5]} intensity={1.5} ref={directionalLightRef} />
        <ambientLight intensity={0.5} />


        {/*<Door position={[0, 1, 0]} />*/}
        <FoxModel scale={0.08} position-y={-1.5}/>

        <Floor scale={10}/>

        {/*<group>
            <mesh scale={0.8} position-y={4.2} ref={sphereRef}>
                <sphereGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>

             <mesh rotation-x={-Math.PI * 0.5} scale={50} position-y={-1}>
                <planeGeometry />
                <MeshReflectorMaterial
                    resolution={512}
                    blur={[1000, 1000]}
                    mixBlur={1}
                    mirror={0.6}
                    color={"darkgrey"}
                />
            </mesh>
        </group>*/}

    </>
}