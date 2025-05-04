import React from 'react';
import { useGLTF } from '@react-three/drei';

const Computer = () => {
  const { scene } = useGLTF('/desktop_pc/scene.gltf');

  return <primitive object={scene} />;
};
};

export default Computer;
