import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Floating skill-themed shapes
const FloatingSkillShape = ({ position, color, shape = 'gear' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.012;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.006;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.002;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.5 + position[1]) * 0.0015;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={2.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === 'gear' ? (
          <torusGeometry args={[0.8, 0.2, 8, 16]} />
        ) : shape === 'crystal' ? (
          <octahedronGeometry args={[0.9]} />
        ) : shape === 'hexagon' ? (
          <cylinderGeometry args={[0.8, 0.8, 0.3, 6]} />
        ) : shape === 'prism' ? (
          <coneGeometry args={[0.7, 1.4, 3]} />
        ) : (
          <icosahedronGeometry args={[0.8]} />
        )}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.75}
          wireframe={Math.random() > 0.3}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

// Tech DNA helix
const TechHelix = () => {
  const helixRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y += 0.01;
      helixRef.current.rotation.x += 0.002;
    }
  });

  const helixPoints: JSX.Element[] = [];
  const radius = 1.5;
  const height = 6;
  const segments = 20;

  for (let i = 0; i < segments; i++) {
    const y = (i / segments) * height - height / 2;
    const angle = (i / segments) * Math.PI * 4;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    helixPoints.push(
      <Float key={`helix-${i}`} speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[x, y, z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'} />
        </mesh>
      </Float>
    );
  }

  return <group ref={helixRef}>{helixPoints}</group>;
};

// Floating code brackets
const FloatingBrackets = () => {
  const bracketsRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (bracketsRef.current) {
      bracketsRef.current.rotation.z += 0.003;
      bracketsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <group ref={bracketsRef}>
      <Float speed={1} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-4, 0, -2]}>
          <torusGeometry args={[0.6, 0.1, 4, 8]} />
          <meshStandardMaterial color="#10b981" wireframe />
        </mesh>
      </Float>
      <Float speed={1.3} rotationIntensity={1.8} floatIntensity={1.8}>
        <mesh position={[4, 0, -2]}>
          <torusGeometry args={[0.6, 0.1, 4, 8]} />
          <meshStandardMaterial color="#10b981" wireframe />
        </mesh>
      </Float>
    </group>
  );
};

const ThreeBackgroundSkills = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 9] }}>
        <ambientLight intensity={0.55} />
        <pointLight position={[10, 10, 10]} intensity={0.9} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.7} />
        <pointLight position={[0, 10, -5]} color="#10b981" intensity={0.6} />
        
        {/* Floating skill shapes */}
        <FloatingSkillShape position={[-3, 2, -2]} color="#8b5cf6" shape="gear" />
        <FloatingSkillShape position={[3, -1, -3]} color="#06b6d4" shape="crystal" />
        <FloatingSkillShape position={[-2, -2, -1]} color="#10b981" shape="hexagon" />
        <FloatingSkillShape position={[2, 3, -2]} color="#f59e0b" shape="prism" />
        <FloatingSkillShape position={[0, -3, -2]} color="#ef4444" shape="icosahedron" />
        <FloatingSkillShape position={[-4, 0, -3]} color="#8b5cf6" shape="gear" />
        <FloatingSkillShape position={[4, 1, -1]} color="#06b6d4" shape="crystal" />
        <FloatingSkillShape position={[-1, 2, -3]} color="#10b981" shape="hexagon" />
        
        {/* Tech DNA helix */}
        <TechHelix />
        
        {/* Floating brackets */}
        <FloatingBrackets />
        
        {/* Stars background */}
        <Stars radius={55} depth={55} count={1000} factor={2.2} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundSkills;