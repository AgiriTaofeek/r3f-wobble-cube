import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Three from './components/Three';
import { SoftShadows, OrbitControls } from '@react-three/drei';
function App() {
  return (
    <Canvas
      shadows
      id="three-canvas-container"
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>

          <Three
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightblue"
            speed={2}
          />
          <Three position={[-2, 1, -5]} color="pink" speed={6} />
          <Three position={[5, 1, -2]} color="pink" speed={6} />
        </group>
        <SoftShadows />

        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default App;
