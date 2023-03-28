import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Burger from './Burger'
import Fox from './Fox'

export default function Experience() {
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Burger />
        <Fox />

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={100}><planeGeometry /><meshStandardMaterial color="greenyellow" /></mesh>
    </>
}
