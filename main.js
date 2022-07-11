// global declaration
import gsap from 'gsap';
import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl';
// console.log(fragmentShader);
let camera, scene, renderer, sphere, group;
const mouse = {
  x: undefined,
  y: undefined
}
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;


// init the scene, camera, and renderer
init();
// animation loop
animate();

function init() {
  // camera
  camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    15000
  );
  camera.position.z = 15;

  // scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );

  // const material = new THREE.MeshBasicMaterial({
  // 	map: new THREE.TextureLoader().load(
  // 		'./img/earth_uv.jpeg'
  // 	)
  // });
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().load('./img/earth_uv.jpeg')
      }
    }
  })
  sphere = new THREE.Mesh( 
    new THREE.SphereGeometry( 5, 50, 50 ), 
    material
  );
  scene.add( sphere );

  // create atmosphere
  const atmosphere = new THREE.Mesh( 
    new THREE.SphereGeometry( 5, 50, 50 ), 
    new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    })
  );
  atmosphere.scale.set(1.1, 1.1, 1.1);
  scene.add( atmosphere );

  group = new THREE.Group();
  group.add(sphere);
  scene.add(group);


  // renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // resize dom handling
  window.addEventListener( 'resize', onWindowResize );
}

/* control functions */
function animate() {
  requestAnimationFrame( animate );
  render();
  sphere.rotation.y += 0.001;
  if (mouse.x !== undefined && mouse.y !== undefined) {
    gsap.to(group.rotation, {
      x: -mouse.y * 0.3,
      y: mouse.x * 0.5,
      duration: 2
    })
  }
}

function render() {
  renderer.render( scene, camera );
}

/* utils functions */
// add this if we want mouse control
document.addEventListener( 'mousemove', onDocumentMouseMove );
function onDocumentMouseMove( event ) {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / innerHeight) * 2 - 1;

  console.log(mouse);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}