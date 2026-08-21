'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xff6b35, 1.5);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);

    // Create 3D Memphis floating geometries (cubes, toruses, spheres, cones)
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.TorusGeometry(0.7, 0.25, 12, 24),
      new THREE.BoxGeometry(1.2, 1.2, 1.2),
      new THREE.ConeGeometry(0.8, 1.4, 16),
      new THREE.OctahedronGeometry(0.9),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xff6b35, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ color: 0x4895ef, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3, metalness: 0.1 }),
    ];

    interface MeshObject {
      mesh: THREE.Mesh;
      rotSpeedX: number;
      rotSpeedY: number;
      floatSpeed: number;
      initialY: number;
      orbitRadius: number;
      orbitSpeed: number;
    }

    const meshObjects: MeshObject[] = [];

    for (let i = 0; i < 22; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geo, mat);

      const x = (Math.random() - 0.5) * 28;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 10 - 2;

      mesh.position.set(x, y, z);
      scene.add(mesh);

      meshObjects.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.03,
        rotSpeedY: (Math.random() - 0.5) * 0.03,
        floatSpeed: Math.random() * 0.002 + 0.001,
        initialY: y,
        orbitRadius: Math.random() * 2 + 1,
        orbitSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      meshObjects.forEach((obj) => {
        obj.mesh.rotation.x += obj.rotSpeedX;
        obj.mesh.rotation.y += obj.rotSpeedY;

        // Orbit and float motion
        obj.mesh.position.y = obj.initialY + Math.sin(elapsedTime * 2 + obj.mesh.id) * 0.5;
        obj.mesh.position.x += Math.cos(elapsedTime * obj.orbitSpeed) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0" />;
};
