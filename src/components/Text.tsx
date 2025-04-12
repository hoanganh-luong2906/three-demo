import { Text3D } from '@react-three/drei';

const Text = () => {
  return (
    <mesh scale={1} position={[0, 0, -2]}>
      <Text3D font={'./Poppins-Black.ttf'}>Hoang Anh Luong</Text3D>
    </mesh>
  );
};

export default Text;
