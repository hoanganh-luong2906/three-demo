import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sphere = () => {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5} position={[0, 0, -2]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshNormalMaterial wireframe />
    </mesh>
  );
};

export default Sphere;
