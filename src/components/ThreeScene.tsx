import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, Group } from 'three';

const AnimatedSphere = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate based on mouse position
      meshRef.current.rotation.x = mousePosition.y * 0.5;
      meshRef.current.rotation.y = mousePosition.x * 0.5;
      
      // Add subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      
      // Scale based on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale } as any, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[2, 4]} />
      <meshStandardMaterial
        color={hovered ? "#8b5cf6" : "#06b6d4"}
        wireframe={false}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const Particles = () => {
  const particlesRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particlePositions = Array.from({ length: 100 }, () => [
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
  ]);

  return (
    <group ref={particlesRef}>
      {particlePositions.map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial color="#ffffff" opacity={0.6} transparent />
        </mesh>
      ))}
    </group>
  );
};

const ThreeScene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Interactive 3D Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Move your cursor around to interact with the 3D elements below
          </p>
        </div>

        <div 
          className="h-[600px] w-full rounded-2xl bg-gradient-to-br from-muted/20 to-background border border-border/50 backdrop-blur-sm shadow-2xl relative overflow-hidden cursor-pointer"
          onMouseMove={handleMouseMove}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            className="w-full h-full"
          >
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1}
              castShadow
            />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
            <pointLight position={[10, -10, -5]} intensity={0.5} color="#06b6d4" />
            
            {/* 3D Elements */}
            <AnimatedSphere mousePosition={mousePosition} />
            <Particles />
            
            {/* Environment */}
            <fog attach="fog" args={['#000000', 10, 25]} />
          </Canvas>
          
          {/* Instructions overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <p className="text-sm text-muted-foreground">
              Move your mouse to control the 3D sphere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeScene;