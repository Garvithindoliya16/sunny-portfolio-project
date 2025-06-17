import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Floating geometric shape component
const FloatingShape = ({ position, color, shape = 'box' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === 'sphere' ? (
          <sphereGeometry args={[0.5, 16, 16]} />
        ) : shape === 'octahedron' ? (
          <octahedronGeometry args={[0.7]} />
        ) : (
          <boxGeometry args={[0.8, 0.8, 0.8]} />
        )}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          wireframe={Math.random() > 0.5}
        />
      </mesh>
    </Float>
  );
};

// Particle system component
const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#8b5cf6" size={0.02} sizeAttenuation={true} />
    </points>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
        
        {/* Floating geometric shapes */}
        <FloatingShape position={[-3, 2, -2]} color="#8b5cf6" shape="sphere" />
        <FloatingShape position={[3, -1, -3]} color="#06b6d4" shape="octahedron" />
        <FloatingShape position={[-2, -2, -1]} color="#10b981" shape="box" />
        <FloatingShape position={[2, 2, -2]} color="#f59e0b" shape="sphere" />
        <FloatingShape position={[0, -3, -2]} color="#ef4444" shape="octahedron" />
        <FloatingShape position={[-4, 0, -3]} color="#8b5cf6" shape="box" />
        
        {/* Particle system */}
        <Particles />
        
        {/* Stars background */}
        <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;