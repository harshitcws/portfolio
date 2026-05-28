import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ mouse, clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.08 + mouse.x * 0.3;
    group.current.rotation.x = mouse.y * 0.2;
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.5}>
        <Sphere args={[1.15, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            emissive="#1e40af"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.85}
            distort={0.35}
            speed={1.8}
          />
        </Sphere>
      </Float>
      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={1.2}>
        <Sphere args={[0.45, 48, 48]} position={[2.2, 0.8, -0.5]}>
          <MeshDistortMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.5} roughness={0.2} metalness={0.7} distort={0.5} speed={2.2} />
        </Sphere>
      </Float>
      <Float speed={0.9} rotationIntensity={0.4} floatIntensity={1.4}>
        <Sphere args={[0.6, 48, 48]} position={[-2.4, -0.6, -0.8]}>
          <MeshDistortMaterial color="#a855f7" emissive="#6b21a8" emissiveIntensity={0.5} roughness={0.25} metalness={0.8} distort={0.4} speed={1.6} />
        </Sphere>
      </Float>
      <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1.1}>
        <Sphere args={[0.3, 32, 32]} position={[1.6, -1.5, 0.6]}>
          <MeshDistortMaterial color="#e879f9" emissive="#a21caf" emissiveIntensity={0.4} roughness={0.3} metalness={0.6} distort={0.6} speed={2} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#bcd2ff" />
      <pointLight position={[-5, -3, 2]} intensity={1.4} color="#a855f7" />
      <pointLight position={[5, -2, 3]} intensity={1.2} color="#22d3ee" />
      <Stars radius={60} depth={40} count={2200} factor={3} fade speed={0.6} />
      <FloatingOrbs />
    </Canvas>
  );
}
