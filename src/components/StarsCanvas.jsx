import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

const StarsCanvas = () => {
  return (
    <Canvas>
      <Stars />
    </Canvas>
  );
};

const Stars = () => {
  const mesh = useRef();

  useEffect(() => {
    const particles = 10000;
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < particles * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    mesh.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry" />
      <pointsMaterial 
        attach="material" 
        color="#ffffff" 
        size={0.01} 
        transparent
        depthWrite={false}
      />
    </points>
  );
};

export default StarsCanvas;
