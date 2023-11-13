import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import mobileImage from "/src/assets/2d/cyberpunk_room.png";


import useMobileDetect from "../useMobileDetect";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./cyberpunk_micro-apartments/scene.gltf");



  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.5}
        position={[0, -1.5, 0]}
        rotation={[0, 2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useMobileDetect();
  const containerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    // maxWidth: "200%",
    // maxHeight: "200%",
  // transform: "scale(1.8)"
    
  };

  if (1) {
    // Render the mobile image instead of the 3D component
    return (
      <div style={containerStyle}>
        <img src={mobileImage} alt="Mobile Image" style={imageStyle} />
      </div>
    );
  }

  
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;