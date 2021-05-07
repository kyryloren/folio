import {
  MeshPhysicalMaterial,
  BackSide,
  FrontSide,
  ShaderMaterial,
  WebGLRenderTarget,
  RGBFormat,
  LinearFilter,
  Vector2,
  RepeatWrapping,
} from 'three';
import { SavePass, BlurPass, LambdaPass, RenderPass } from 'postprocessing';
import { useEffect, useMemo, useRef } from 'react';
import { vert as vertexShader } from './transmission-material/vertex.js';
import { frag as fragmentShader } from './transmission-material/fragment.js';
import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const renderTargetParams = {
  minFilter: LinearFilter,
  magFilter: LinearFilter,
  format: RGBFormat,
  stencilBuffer: false,
};

const FRONTMATERIAL_DEF_PROPS = {
  color: 'white',
  clearcoat: 0.9,
  clearcoatRoughness: 1,
  metalness: 0.65,
  roughness: 0.1,
  side: FrontSide,
};

const BACKMATERIAL_DEF_PROPS = {
  color: 'gray',
  clearcoat: 0.9,
  clearcoatRoughness: 1,
  metalness: 0.1,
  transparent: true,
  transmission: 0.3,
  roughness: 0.4,
  side: BackSide,
};

const TRANSMISSIONMATERIAL_DEF_PROPS = {
  transmission: 1,
  transmissionIntensity: 1,
  distortionIntensity: 1,
  fresnel: 3,
  fresnelAmplifier: 1,
};

export default function useMaterial(props) {
  const { frontMaterial, backMaterial, transmissionMaterial } = props || {};
  const _frontMaterial = { ...FRONTMATERIAL_DEF_PROPS, ...frontMaterial };
  const _backMaterial = { ...BACKMATERIAL_DEF_PROPS, ...backMaterial };
  const _transmissionMaterial = { ...TRANSMISSIONMATERIAL_DEF_PROPS, ...transmissionMaterial };

  const ref = useRef();
  const { gl, size, camera, scene } = useThree();
  const [gloss, noise] = useTexture(['/gloss_map.jpeg', '/noise.png']);

  useEffect(() => {
    noise.wrapS = RepeatWrapping;
    noise.wrapT = RepeatWrapping;
    noise.minFilter = LinearFilter;
    noise.magFilter = LinearFilter;
    noise.anisotropy = 16;
    noise.repeat = new Vector2(50, 50);
  }, [noise]);

  const pipeline = useMemo(() => {
    const frontFbo = new SavePass(
      new WebGLRenderTarget(size.width, size.height, renderTargetParams),
    );
    const backFbo = new SavePass(
      new WebGLRenderTarget(size.width, size.height, renderTargetParams),
    );

    const frontMaterial = new MeshPhysicalMaterial(_frontMaterial);
    const backMaterial = new MeshPhysicalMaterial(_backMaterial);
    const transmissionMaterial = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        backfbo: { value: backFbo.renderTarget.texture },
        fbo: { value: frontFbo.renderTarget.texture },
        distortionMap: { value: gloss },
        noise: { value: noise },
        cameraPos: { value: camera.position },
        resolution: {
          value: new Vector2(size.width, size.height).multiplyScalar(gl.getPixelRatio()),
        },
        transmission: { value: _transmissionMaterial.transmission },
        transmissionIntensity: { value: _transmissionMaterial.transmissionIntensity },
        distortionIntensity: { value: _transmissionMaterial.distortionIntensity },
        fresnel: { value: _transmissionMaterial.fresnel },
        fresnelAmplifier: { value: _transmissionMaterial.fresnelAmplifier },
      },
    });

    const lambda1 = new LambdaPass(() => void (ref.current.material = frontMaterial));
    const lambda2 = new LambdaPass(() => void (ref.current.material = backMaterial));
    const lambda3 = new LambdaPass(() => {
      transmissionMaterial.uniforms.cameraPos.value = camera.position;
      ref.current.material = transmissionMaterial;
    });
    const renderer = new RenderPass(scene, camera);
    const blur = new BlurPass();

    return [lambda1, renderer, frontFbo, lambda2, renderer, blur, backFbo, lambda3];
  }, [
    ref,
    size,
    scene,
    gl,
    noise,
    gloss,
    camera,
    _frontMaterial,
    _backMaterial,
    _transmissionMaterial,
  ]);

  return [ref, pipeline];
}
