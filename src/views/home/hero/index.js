import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import { useSpring, a } from 'react-spring/three';

import useTransmissionMaterial from './use-material';
import usePostprocessing from './use-postprocessing';
import Text from './text';

const Model = () => {
  const { nodes } = useGLTF('/diamond.glb', true);
  const [hovering, setHovering] = useState(false);

  const [ref, pipeline] = useTransmissionMaterial({
    frontMaterial: {
      color: 'hotPink',
    },
    backMaterial: {
      color: 'hotPink',
    },
    transmissionMaterial: {
      transmission: 0.4,
      transmissionIntensity: 3,
      distortionIntensity: 0.4,
      fresnel: 3,
      fresnelAmplifier: 2,
    },
  });
  usePostprocessing(pipeline);

  const animProps = useSpring({
    scale: hovering ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5],
  });

  useFrame(() => {
    window.scroll.on('scroll', func => {
      ref.current.position.y = func.scroll.y / 250 - 8;
    });
  });

  return (
    <a.mesh
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
      rotation={[0.2, 0, THREE.Math.degToRad(-10)]}
      scale={animProps.scale}
      position={[0, -8, 0]}
      ref={ref}
      geometry={nodes.pCone1_lambert1_0.geometry}
    />
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} />
      <directionalLight position={[-10, -10, -5]} />
    </>
  );
};

const Hero = () => {
  let domnodeRef = useRef(null);

  return (
    <>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 30], zoom: 75 }}
        style={{ width: '100vw', height: '100vw', position: 'relative', zIndex: 6 }}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Lights />
        <Html fullscreen prepend zIndexRange={[5, 0]} portal={domnodeRef}>
          <Text />
        </Html>
      </Canvas>
      <div>
        <div style={{ height: `70vw` }} ref={domnodeRef} />
      </div>
    </>
  );
};

export default Hero;
