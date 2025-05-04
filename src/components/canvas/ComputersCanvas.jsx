import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

import Computer from './Computer';

const ComputersCanvas = () => {
  return (
    <div className='w-full h-full laptop:absolute laptop:right-0 laptop:-top-32 laptop:w-[40%] laptop:h-[100%]'>
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Computer position={[-4, 0, 0]} scale={0.5} rotation-y={-0.5} />
          <Computer position={[4, 0, 0]} scale={0.5} rotation-y={0.5} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
