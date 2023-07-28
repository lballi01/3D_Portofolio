import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <primitive object={computer.scene} scale={2.5} position-y={-3} rotation-y={0} />
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 200,
        position: [-2, -25, 25],
      }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;