import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const BoxAndTorus = () => {
  const groupRef = useRef<any>(null);
  const boxRef = useRef<any>(null);
  const torusRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // groupRef.current.rotation.x += delta * 0.5;
      groupRef.current.rotation.y += delta * 0.5;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x += delta * 0.5;
      // boxRef.current.rotation.y += delta * 0.5;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * Math.random() * 2;
      torusRef.current.rotation.y += delta * Math.random() * 2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      <mesh ref={boxRef} scale={1.5} position={[4, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[-4, 0, 0]} scale={0.5} ref={torusRef}>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default BoxAndTorus;
