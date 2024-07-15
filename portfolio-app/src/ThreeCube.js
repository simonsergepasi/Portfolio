import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const albedo = textureLoader.load('/albedo.jpg');
    const metalness = textureLoader.load('/metallic.jpg');
    const roughness = textureLoader.load('/roughness.jpg');
    const normal = textureLoader.load('/normal.jpg');

    // Create a geometry
    const geometry = new THREE.BoxGeometry();

    // Create a PBR material
    const material = new THREE.MeshStandardMaterial({
      map: albedo,
      metalnessMap: metalness,
      roughnessMap: roughness,
      normalMap: normal,
      metalness: 1.0,
      roughness: 0.5
    });

    // Combine geometry and material into a mesh
    const cube = new THREE.Mesh(geometry, material);

    // Add the cube to the scene
    scene.add(cube);

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeCube;
