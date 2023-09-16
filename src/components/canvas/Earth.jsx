import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import useMobileDetect from "../useMobileDetect";
import mobileImage from "/src/assets/2d/earth.png";


const Earth = () => {
  const earth = useGLTF("./earthquakes/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.035} position-y={0} rotation-y={0} />
    // <primitive object={earth.scene} scale={0.1} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {

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
    maxWidth: "300%",
    maxHeight: "300%",
  };
  if (isMobile) {
    return (
      <div style={containerStyle}>
        <img src={mobileImage} alt="Mobile Image" style={imageStyle} />
      </div>
    );
  }


  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
