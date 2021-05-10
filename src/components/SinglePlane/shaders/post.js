// post processing
export const firstPassFs = `
  precision mediump float;

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D uRenderTexture;
  uniform sampler2D displacementTexture;

  uniform float uDisplacement;

  void main( void ) {
    vec2 textureCoords = vTextureCoord;
    vec4 displacement = texture2D(displacementTexture, textureCoords);

    // displace along Y axis
    textureCoords.y += (sin(displacement.r) / 5.0) * uDisplacement;
    
    gl_FragColor = texture2D(uRenderTexture, textureCoords);
  }
`;

export const secondPassFs = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D uRenderTexture;

  uniform float uScrollEffect;

  void main() {
    vec2 textureCoords = vTextureCoord;
    vec2 texCenter = vec2(0.5, 0.5);

    // distort around scene center
    textureCoords += vec2(texCenter - textureCoords).xy * sin(distance(texCenter, textureCoords)) * uScrollEffect / 175.0;

    gl_FragColor = texture2D(uRenderTexture, textureCoords);
  }
`;
