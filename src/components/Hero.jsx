import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedCube() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00d8ff" wireframe />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<Html>Loading...</Html>}>
          <AnimatedCube />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-center">Hi, I'm Nuthan</h1>
        <p className="mt-6 text-2xl text-cyan-400 text-center">
          Full-Stack Developer — React, Next.js, Node, Three.js
        </p>
        <p className="mt-3 text-lg text-white/70 text-center max-w-xl">
          I build creative, performant web experiences using the latest technologies and plenty of imagination.
        </p>
      </div>
    </section>
  );
}