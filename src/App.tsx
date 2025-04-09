import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import Sphere from './components/Sphere';
import Plane from './components/Plane';
import BoxAndTorus from './components/BoxAndTorus';

function App() {
  return (
    <div className="container h-screen w-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />

        <Sphere />
        <Plane />
        <BoxAndTorus />
      </Canvas>
    </div>
  );
}

export default App;
