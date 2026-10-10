"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Honeycomb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.5, 0, 0]}>
      <icosahedronGeometry args={[1.6, 0]} />
      <meshStandardMaterial
        color="#e0e0e0"
        wireframe={true}
        transparent={true}
        opacity={0.12}
      />
      <icosahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial color="#828b8d" wireframe={true} transparent={true} opacity={0.08} />
    </mesh>
  );
}

export default function HoneycombScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#e0e0e0" />
        <pointLight position={[-10, -10, -10]} intensity={0.25} color="#828b8d" />
        <Honeycomb />
      </Canvas>
    </div>
  );
}
