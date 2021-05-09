import React from 'react';
import { Plane } from 'react-curtains';
import NYCImage from '@images/nyc.jpg';
import { vertexShader, fragmentShader } from './shaders/image';

import './index.css';

function SinglePlane({ onPlaneReady = () => {} }) {
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
      <img src={NYCImage} data-sampler="planeTexture" alt="NYC" />
    </Plane>
  );
}

export default SinglePlane;
