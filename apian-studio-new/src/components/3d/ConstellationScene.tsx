"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Group, Points } from "three";

/* Deterministik PRNG — her renderda aynı takımyıldız */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(rand: () => number) {
  return (rand() + rand() + rand()) / 1.5 - 1;
}

const PALETTE = [
  "#8052ff", "#8052ff", "#8052ff",
  "#ffb829", "#ffb829",
  "#15846e",
  "#4d7cff", "#4d7cff",
  "#d44dff",
  "#efe9ff",
];

function makeTriangleSprite(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(size / 2, 8);
    ctx.lineTo(size - 8, size - 10);
    ctx.lineTo(8, size - 10);
    ctx.closePath();
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function buildCloud(
  count: number,
  rand: () => number,
  ambient: boolean
): { positions: Float32Array; colors: Float32Array } {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();

  for (let i = 0; i < count; i++) {
    let x: number, y: number, z: number;
    if (ambient) {
      // Seyrek ortam alanı: geniş küre kabuğu
      const r = 3.4 + rand() * 3.2;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      x = r * Math.sin(phi) * Math.cos(theta);
      y = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      z = r * Math.cos(phi) * 0.5 - 1;
    } else {
      // Çekirdek: iki loplu beyin formu (gauss kümeleri)
      const lobe = rand() > 0.5 ? 0.78 : -0.78;
      x = lobe + gaussian(rand) * 1.15;
      y = gaussian(rand) * 1.35;
      z = gaussian(rand) * 0.75;
    }
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    color.set(PALETTE[Math.floor(rand() * PALETTE.length)]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  return { positions, colors };
}

function ParticleLayer({
  count,
  seed,
  ambient,
  size,
  opacity,
  speed,
}: {
  count: number;
  seed: number;
  ambient: boolean;
  size: number;
  opacity: number;
  speed: number;
}) {
  const ref = useRef<Points>(null);
  const sprite = useMemo(() => makeTriangleSprite(), []);
  const geometry = useMemo(() => {
    const rand = mulberry32(seed);
    const { positions, colors } = buildCloud(count, rand, ambient);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [count, seed, ambient]);

  useFrame((state) => {
    if (!ref.current) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y += 0.0009 * speed;
    ref.current.position.y = Math.sin(t * 0.25 * speed) * 0.08;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={size}
        map={sprite}
        vertexColors={true}
        transparent={true}
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}

function StaticField() {
  const group = useRef<Group>(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame(() => {
    if (!group.current || reduced) return;
    group.current.rotation.y += 0.0006;
  });

  return (
    <group ref={group}>
      <ParticleLayer count={2200} seed={7} ambient={false} size={0.075} opacity={0.95} speed={1} />
      <ParticleLayer count={500} seed={99} ambient={true} size={0.05} opacity={0.5} speed={-0.6} />
    </group>
  );
}

export default function ConstellationScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <StaticField />
      </Canvas>
    </div>
  );
}
