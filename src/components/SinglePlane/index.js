import React from 'react';
import { Plane } from 'react-curtains';

import { vertexShader, fragmentShader } from './shaders/image';
import './index.css';

function SinglePlane({ image, alt, onPlaneReady = () => {} }) {
  const uniforms = {
    planeDeformation: {
      name: 'uPlaneDeformation',
      type: '1f',
      value: 0,
    },
  };

  return (
    <Plane
      className="MultiplePlanes-plane"
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      shareProgram={true}
      widthSegments={10}
      heightSegments={10}
      uniforms={uniforms}
      onReady={onPlaneReady}>
      <img src={image} data-sampler="planeTexture" alt={alt} />
    </Plane>
  );
}

export default SinglePlane;
