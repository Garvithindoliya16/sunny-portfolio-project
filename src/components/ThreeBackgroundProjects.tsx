import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Floating project-themed shapes
const FloatingProjectShape = ({ position, color, shape = 'cube' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.007;
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.002;
      meshRef.current.position.z += Math.cos(state.clock.elapsedTime * 0.4 + position[2]) * 0.001;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === 'cube' ? (
          <boxGeometry args={[1, 1, 1]} />
        ) : shape === 'pyramid' ? (
          <coneGeometry args={[0.8, 1.5, 4]} />
        ) : shape === 'ring' ? (
          <torusGeometry args={[1, 0.3, 8, 16]} />
        ) : shape === 'diamond' ? (
          <octahedronGeometry args={[0.9]} />
        ) : (
          <sphereGeometry args={[0.7, 16, 16]} />
        )}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          wireframe={Math.random() > 0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

// Floating tech icons as 3D shapes
const TechShapes = () => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-5, 2, -4]}>
          <tetrahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#61dafb" transparent opacity={0.8} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.2}>
        <mesh position={[5, -1, -3]}>
          <dodecahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#f7df1e" transparent opacity={0.8} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[0, 3, -5]}>
          <icosahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#ff6b6b" transparent opacity={0.8} />
        </mesh>
      </Float>
    </group>
  );
};

const ThreeBackgroundProjects = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.7} />
        <pointLight position={[10, -10, 5]} color="#8b5cf6" intensity={0.6} />
        
        {/* Floating project shapes */}
        <FloatingProjectShape position={[-3, 2, -2]} color="#3b82f6" shape="cube" />
        <FloatingProjectShape position={[4, -1, -3]} color="#8b5cf6" shape="pyramid" />
        <FloatingProjectShape position={[-2, -2, -1]} color="#10b981" shape="ring" />
        <FloatingProjectShape position={[2, 3, -2]} color="#f59e0b" shape="diamond" />
        <FloatingProjectShape position={[0, -3, -2]} color="#ef4444" shape="sphere" />
        <FloatingProjectShape position={[-4, 0, -3]} color="#06b6d4" shape="cube" />
        <FloatingProjectShape position={[3, 1, -1]} color="#8b5cf6" shape="pyramid" />
        <FloatingProjectShape position={[-1, 2, -3]} color="#10b981" shape="diamond" />
        
        {/* Tech-themed shapes */}
        <TechShapes />
        
        {/* Stars background */}
        <Stars radius={50} depth={50} count={1200} factor={2} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundProjects;