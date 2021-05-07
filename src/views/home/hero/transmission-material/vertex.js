export const vert = `
varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vViewDirection;
uniform vec3 cameraPos;


void main() {
    vUv = uv;
    vec4 worldPos = modelMatrix * vec4( position, 1.0);
    vWorldNormal = normalize( modelMatrix * vec4(normal, 0.)).xyz;
    vViewDirection = normalize(worldPos.xyz - cameraPos);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);
}
`;
