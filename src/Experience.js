import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Burger from './Burger'
import Pyramid from './Pyramid'
import Alien from './Alien'

export default function Experience() {
    return <>
    

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Alien />
        <Pyramid />

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={100}><planeGeometry /><meshStandardMaterial color="greenyellow" /></mesh>
    </>
}
