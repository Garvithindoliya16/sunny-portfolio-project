import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Floating geometric shape component for About section
const FloatingCodeShape = ({ position, color, shape = 'torusKnot' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.006;
      meshRef.current.rotation.z += 0.004;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.001;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.3 + position[1]) * 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        {shape === 'torusKnot' ? (
          <torusKnotGeometry args={[0.6, 0.2, 64, 8]} />
        ) : shape === 'dodecahedron' ? (
          <dodecahedronGeometry args={[0.8]} />
        ) : shape === 'icosahedron' ? (
          <icosahedronGeometry args={[0.7]} />
        ) : (
          <cylinderGeometry args={[0.3, 0.6, 1.2, 6]} />
        )}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          wireframe={Math.random() > 0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

// Floating particles for coding theme
const CodeParticles = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0008;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  const particleCount = 120;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
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
      <pointsMaterial color="#10b981" size={0.015} sizeAttenuation={true} />
    </points>
  );
};

const ThreeBackgroundAbout = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.6} />
        <pointLight position={[0, 10, -10]} color="#10b981" intensity={0.5} />
        
        {/* Floating code-themed shapes */}
        <FloatingCodeShape position={[-4, 1, -2]} color="#8b5cf6" shape="torusKnot" />
        <FloatingCodeShape position={[3, -2, -3]} color="#10b981" shape="dodecahedron" />
        <FloatingCodeShape position={[-2, -1, -1]} color="#06b6d4" shape="icosahedron" />
        <FloatingCodeShape position={[4, 2, -2]} color="#f59e0b" shape="cylinder" />
        <FloatingCodeShape position={[0, -3, -2]} color="#ef4444" shape="torusKnot" />
        <FloatingCodeShape position={[-3, 0, -3]} color="#8b5cf6" shape="dodecahedron" />
        <FloatingCodeShape position={[2, 1, -1]} color="#10b981" shape="icosahedron" />
        
        {/* Code particles */}
        <CodeParticles />
        
        {/* Stars background */}
        <Stars radius={40} depth={40} count={800} factor={1.5} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundAbout;