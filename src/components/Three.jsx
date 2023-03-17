import React, { useState, useRef } from 'react';
import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const Three = ({ position, args, color, speed }) => {
  const threeRef = useRef(null);

  useFrame(({ clock }) => {
    // threeRef.current.rotation.x = threeRef.current.rotation.y += 0.01;
    threeRef.current.rotation.x = threeRef.current.rotation.y = Math.sin(
      clock.getElapsedTime()
    );
    // console.log(clock);
  });

  const [expand, setExpand] = useState(false);

  const { scale } = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    <animated.mesh
      castShadow
      position={position}
      ref={threeRef}
      onClick={() => setExpand((prevExpand) => !prevExpand)}
      scale={scale}
    >
      <boxGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </animated.mesh>
  );
};

export default Three;
