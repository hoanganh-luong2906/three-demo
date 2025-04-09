const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} scale={20}>
      <planeGeometry />
      <meshBasicMaterial color="pink" />
    </mesh>
  );
};

export default Plane;
