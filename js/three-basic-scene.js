import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const container = document.querySelector('[data-three-scene="basic"]');

if (container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshNormalMaterial()
  );

  scene.add(cube);
  camera.position.z = 3;
  container.appendChild(renderer.domElement);

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight || 420;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.012;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener('resize', resize);
  animate();
}
