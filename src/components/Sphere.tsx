import { TransformControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sphere = () => {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }

    // const angle = state.clock.elapsedTime;
    // state.camera.position.y = Math.sin(angle) * 2;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <TransformControls object={meshRef} mode="translate" />
      <mesh ref={meshRef} scale={1} position={[0, 0, -2]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshNormalMaterial wireframe />
      </mesh>
    </>
  );
};

export default Sphere;
