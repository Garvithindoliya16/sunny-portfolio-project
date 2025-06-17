import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Floating communication-themed shapes
const FloatingContactShape = ({ position, color, shape = 'message' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.rotation.y += 0.009;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.003;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.2 + position[1]) * 0.002;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={2} floatIntensity={2.5}>
      <mesh ref={meshRef} position={position}>
        {shape === 'message' ? (
          <boxGeometry args={[1.2, 0.8, 0.2]} />
        ) : shape === 'envelope' ? (
          <coneGeometry args={[0.8, 1.2, 4]} />
        ) : shape === 'phone' ? (
          <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
        ) : shape === 'network' ? (
          <dodecahedronGeometry args={[0.7]} />
        ) : (
          <sphereGeometry args={[0.6, 12, 12]} />
        )}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          wireframe={Math.random() > 0.4}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
};

// Floating connection lines
const ConnectionLines = () => {
  const linesRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z += 0.002;
      linesRef.current.rotation.y += 0.001;
    }
  });

  const createLine = (start: [number, number, number], end: [number, number, number], color: string) => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    return (
      <line key={`${start.join(',')}-${end.join(',')}`}>
        <bufferGeometry attach="geometry" {...geometry} />
        <lineBasicMaterial attach="material" color={color} transparent opacity={0.4} />
      </line>
    );
  };

  return (
    <group ref={linesRef}>
      {createLine([-2, 1, 0], [2, -1, 0], '#3b82f6')}
      {createLine([1, 2, 0], [-1, -2, 0], '#8b5cf6')}
      {createLine([-3, 0, 0], [3, 0, 0], '#10b981')}
      {createLine([0, -3, 0], [0, 3, 0], '#06b6d4')}
    </group>
  );
};

// Orbiting contact elements
const OrbitingElements = () => {
  const orbitRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={orbitRef}>
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[3, 0, 0]}>
          <ringGeometry args={[0.3, 0.5, 8]} />
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.7} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[-3, 0, 0]}>
          <ringGeometry args={[0.2, 0.4, 6]} />
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.7} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[0, 3, 0]}>
          <ringGeometry args={[0.4, 0.6, 10]} />
          <meshStandardMaterial color="#10b981" transparent opacity={0.7} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={1.4} floatIntensity={1.4}>
        <mesh position={[0, -3, 0]}>
          <ringGeometry args={[0.25, 0.45, 7]} />
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
        </mesh>
      </Float>
    </group>
  );
};

const ThreeBackgroundContact = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.9} />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.8} />
        <pointLight position={[0, 10, -5]} color="#8b5cf6" intensity={0.7} />
        
        {/* Floating contact shapes */}
        <FloatingContactShape position={[-3, 2, -2]} color="#3b82f6" shape="message" />
        <FloatingContactShape position={[4, -1, -3]} color="#8b5cf6" shape="envelope" />
        <FloatingContactShape position={[-2, -2, -1]} color="#10b981" shape="phone" />
        <FloatingContactShape position={[2, 3, -2]} color="#06b6d4" shape="network" />
        <FloatingContactShape position={[0, -3, -2]} color="#f59e0b" shape="sphere" />
        <FloatingContactShape position={[-4, 0, -3]} color="#ef4444" shape="message" />
        <FloatingContactShape position={[3, 1, -1]} color="#8b5cf6" shape="envelope" />
        <FloatingContactShape position={[-1, 2, -3]} color="#10b981" shape="network" />
        
        {/* Connection lines */}
        <ConnectionLines />
        
        {/* Orbiting elements */}
        <OrbitingElements />
        
        {/* Stars background */}
        <Stars radius={45} depth={45} count={900} factor={1.8} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundContact;