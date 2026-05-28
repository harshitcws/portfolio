import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 14;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, [count]);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.03;
    ref.current.rotation.x = clock.getElapsedTime() * 0.012;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#7dd3fc" transparent opacity={0.85} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function GalaxyBackground() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Particles />
    </Canvas>
  );
}
