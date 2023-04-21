import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas camera={{
        fov: 50,
        near: 0.7,
        far: 200,
        position: [0, 1, 10],
      }}
      shadows={true}>
        {/* <axesHelper position-y={-0.2}/> */}
        <Experience />
    </Canvas>
)