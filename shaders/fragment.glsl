uniform sampler2D globeTexture;
varying vec2 vertexUV; // vec2(0, 0.24) - [0, 0.24]

void main() {
  gl_FragColor = texture2D(globeTexture, vertexUV); //vec4(0.4, 1, 1, 1);
}