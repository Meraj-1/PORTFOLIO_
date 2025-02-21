import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const Cube = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 1); // ✅ Black background
    container.appendChild(renderer.domElement);

    // ✅ Shiny Black Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,  // Black color
      metalness: 1,     // ✅ Make it shiny
      roughness: 60,   // ✅ Less rough for a glossy effect
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // ✅ Soft White Ambient Light (For Visibility)
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // ✅ Focused SpotLight for Shining Effect
    const spotLight = new THREE.SpotLight(0xffffff, 12);
    spotLight.position.set(5, 5, 5); // ✅ Positioning the spotlight
    spotLight.angle = Math.PI / 1;   // ✅ Focused angle
    spotLight.penumbra = 1;        // ✅ Soft edges for realism
    spotLight.castShadow = true;     // ✅ Enable shadows
    scene.add(spotLight);

    // ✅ Add a light helper to visualize light (Optional)
    // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);

    // Render Loop
    const renderLoop = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(renderLoop);
    };
    renderLoop();

    // GSAP Animation (Rotating the cube)
    gsap.to(cube.rotation, {
      y: Math.PI * 2, // 360 degrees
      z: Math.PI * 2,
      duration: 10,
      repeat: -1, // Infinite loop
      ease: "linear",
    });

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "200px", height: "200px" }} />;
};

export default Cube;
