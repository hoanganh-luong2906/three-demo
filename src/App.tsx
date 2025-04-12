import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { StrictMode } from 'react';
import * as THREE from 'three';
import './App.css';
import BoxAndTorus from './components/BoxAndTorus';
import Plane from './components/Plane';
import Sphere from './components/Sphere';

function App() {
  return (
    <div className="h-screen w-screen">
      <StrictMode>
        <Canvas dpr={[1, 2]} gl={{ antialias: true, toneMapping: THREE.CineonToneMapping }}>
          <OrbitControls makeDefault />

          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <pointLight position={[-10, -10, -10]} />

          {/* <Text /> */}
          <Sphere />
          <Plane />
          <BoxAndTorus />
        </Canvas>
      </StrictMode>
    </div>
  );
}

export default App;
