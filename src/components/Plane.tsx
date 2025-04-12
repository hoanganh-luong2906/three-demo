import { MeshReflectorMaterial } from '@react-three/drei';

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} scale={50}>
      <planeGeometry />
      <MeshReflectorMaterial resolution={512} blur={[1000, 1000]} mixBlur={1} mirror={0.5} color={'white'} />
    </mesh>
  );
};

export default Plane;
