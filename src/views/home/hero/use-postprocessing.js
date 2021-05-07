import { useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo } from 'react';
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  BlendFunction,
  PredicationMode,
  SMAAEffect,
  SMAAImageLoader,
  TextureEffect,
} from 'postprocessing';

function usePostprocessing(reflectorPipeline = []) {
  const { gl, size, scene, camera } = useThree();
  const smaa = useLoader(SMAAImageLoader);

  const [composer] = useMemo(() => {
    const composer = new EffectComposer(gl, {
      frameBufferType: THREE.HalfFloatType,
    });
    const renderPass = new RenderPass(scene, camera);

    // INIT ANTIALIAS
    const SMAA = new SMAAEffect(...smaa);
    SMAA.edgeDetectionMaterial.setEdgeDetectionThreshold(0.05);
    SMAA.edgeDetectionMaterial.setPredicationMode(PredicationMode.DEPTH);
    SMAA.edgeDetectionMaterial.setPredicationThreshold(0.002);
    SMAA.edgeDetectionMaterial.setPredicationScale(1.0);
    const edgesTextureEffect = new TextureEffect({
      blendFunction: BlendFunction.SKIP,
      texture: SMAA.renderTargetEdges.texture,
    });
    const weightsTextureEffect = new TextureEffect({
      blendFunction: BlendFunction.SKIP,
      texture: SMAA.renderTargetWeights.texture,
    });
    // END ANTIALIAS

    const effectPass = new EffectPass(camera, SMAA, edgesTextureEffect, weightsTextureEffect);

    reflectorPipeline.forEach(pass => composer.addPass(pass));

    composer.addPass(renderPass);
    composer.addPass(effectPass);

    return [composer];
  }, [gl, scene, camera, reflectorPipeline, smaa]);

  useEffect(() => void composer.setSize(size.width, size.height), [composer, size]);
  useFrame((_, delta) => void composer.render(delta), -1);
}

export default usePostprocessing;
