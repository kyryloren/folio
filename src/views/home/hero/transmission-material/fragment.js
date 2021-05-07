export const frag = `
uniform vec2 resolution;
uniform sampler2D fbo;
uniform sampler2D backfbo;
uniform sampler2D distortionMap;
uniform sampler2D noise;

uniform float distortionIntensity;
uniform float transmission;
uniform float transmissionIntensity;
uniform float fresnelAmplifier;

varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vViewDirection;

float getFresnel(vec3 viewDirection, vec3 worldNormal) {
    return pow( 1.0 + dot( viewDirection, worldNormal), 3.0 );
}

const vec4 lum = vec4(0.5, 0.5, 0.5, 0);

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;

    float fresnel = clamp(getFresnel(vViewDirection, vWorldNormal), 0., 1.);
    float fr = 1. - fresnel;
    vec4 n = texture2D(noise, vUv * 4.);

    vec2 st = uv - 0.5;
    st *= 2.;
    st += 0.5;

    float distortion = texture2D(distortionMap, st).r * distortionIntensity;
    vec4 front = texture2D(fbo, uv);

    // Not the accurate distortion effect.
    vec4 back = texture2D(backfbo, uv * (1. + (distortion - fresnel) * 0.15));

    float grayscale = max(dot(front, lum), 0.);

    float p = fr * transmission * transmissionIntensity;

    vec4 col = mix(front, back, p);
    col.rgb = mix(col.rgb, col.rgb * 0.7, clamp(fresnel * fresnelAmplifier, 0., 1.));
    col = mix(col, front, grayscale);
    col += n * 0.05;
    col = min(col, vec4(1));

    gl_FragColor = col;
}

`;
