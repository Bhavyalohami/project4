import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeStage = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 1.2, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const acid = new THREE.Color("#1f8a70");
    const violet = new THREE.Color("#4f46e5");
    const chrome = new THREE.Color("#e8edf2");

    scene.add(new THREE.AmbientLight("#ffffff", 1.35));

    const key = new THREE.PointLight(acid, 85, 14);
    key.position.set(3, 4, 4);
    scene.add(key);

    const rim = new THREE.PointLight(violet, 70, 14);
    rim.position.set(-4, -1, 3);
    scene.add(rim);

    const deviceMaterial = new THREE.MeshPhysicalMaterial({
      color: "#17191f",
      metalness: 0.72,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
    });

    const faceMaterial = new THREE.MeshPhysicalMaterial({
      color: "#08090d",
      emissive: "#182100",
      emissiveIntensity: 0.32,
      metalness: 0.4,
      roughness: 0.18,
    });

    const device = new THREE.Mesh(
      new THREE.BoxGeometry(2.05, 3.8, 0.22, 10, 10, 2),
      deviceMaterial
    );
    device.rotation.set(-0.08, -0.32, 0.08);
    group.add(device);

    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(1.72, 3.18, 0.045),
      faceMaterial
    );
    screen.position.z = 0.14;
    screen.rotation.copy(device.rotation);
    group.add(screen);

    const chip = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.82, 2),
      new THREE.MeshPhysicalMaterial({
        color: "#ffc857",
        emissive: "#7a4b00",
        emissiveIntensity: 0.28,
        metalness: 0.62,
        roughness: 0.18,
      })
    );
    chip.position.set(1.35, 0.8, 0.8);
    group.add(chip);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: acid,
      transparent: true,
      opacity: 0.48,
      side: THREE.DoubleSide,
    });

    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.012, 16, 160), ringMaterial);
    ringOne.rotation.set(1.25, 0.16, 0.1);
    group.add(ringOne);

    const ringTwo = new THREE.Mesh(
      new THREE.TorusGeometry(2.78, 0.009, 16, 160),
      new THREE.MeshBasicMaterial({ color: violet, transparent: true, opacity: 0.36, side: THREE.DoubleSide })
    );
    ringTwo.rotation.set(1.38, -0.5, 0.35);
    group.add(ringTwo);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: chrome,
        size: 0.026,
        transparent: true,
        opacity: 0.72,
      })
    );
    scene.add(particles);

    const resize = () => {
      const width = mount.clientWidth || 600;
      const height = mount.clientHeight || 560;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = Math.sin(t * 0.32) * 0.18;
      group.rotation.x = Math.sin(t * 0.23) * 0.08;
      chip.rotation.x += 0.01;
      chip.rotation.y += 0.016;
      ringOne.rotation.z += 0.006;
      ringTwo.rotation.z -= 0.004;
      particles.rotation.y += 0.0009;
      particles.rotation.x = Math.sin(t * 0.12) * 0.08;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      particleGeometry.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="threeStage" ref={mountRef} aria-hidden="true" />;
};

export default ThreeStage;
