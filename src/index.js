import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        {/* <axesHelper position-y={-0.2}/> */}
        <Experience />
    </Canvas>
)