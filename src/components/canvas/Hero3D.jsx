import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import VisibilityGate from "./VisibilityGate";

// shared, normalized pointer (-1..1) tracked on the window so it works even
// though the canvas itself is pointer-events-none (keeps page scroll smooth)
const pointer = { x: 0, y: 0 };

// glowing code lines that scroll on the laptop screen
const ScreenCode = () => {
  const grp = useRef();
  const rows = [
    { w: 1.5, c: "#ff2247" },
    { w: 1.9, c: "#00d4ff" },
    { w: 1.1, c: "#e2e8f0" },
    { w: 1.7, c: "#ff6a3d" },
    { w: 2.0, c: "#00d4ff" },
    { w: 0.9, c: "#ff2247" },
  ];
  useFrame((state) => {
    if (grp.current) {
      const t = (state.clock.elapsedTime * 0.5) % 1.3;
      grp.current.position.y = -0.65 + t;
      grp.current.children.forEach((m, i) => {
        m.material.opacity =
          0.5 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.4;
      });
    }
  });
  return (
    <group ref={grp}>
      {rows.map((r, i) => (
        <mesh key={i} position={[-1.0 + r.w / 2, 0.55 - i * 0.26, 0]}>
          <planeGeometry args={[r.w, 0.09]} />
          <meshBasicMaterial color={r.c} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
};

// interactive 3D laptop — rotates to follow the cursor
const Laptop = ({ scale }) => {
  const root = useRef();
  const display = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      // target rotation follows the mouse, with a gentle idle drift
      const targetY = pointer.x * 0.7 + Math.sin(t * 0.3) * 0.08 - 0.2;
      const targetX = -pointer.y * 0.4 + 0.12;
      root.current.rotation.y = THREE.MathUtils.lerp(
        root.current.rotation.y,
        targetY,
        0.06
      );
      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        targetX,
        0.06
      );
    }
    if (display.current)
      display.current.material.emissiveIntensity = 0.45 + Math.sin(t * 4) * 0.15;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.1} floatIntensity={0.7}>
      <group ref={root} scale={scale}>
        {/* keyboard deck */}
        <mesh position={[0, -0.95, 0.2]}>
          <boxGeometry args={[4.2, 0.18, 2.8]} />
          <meshStandardMaterial color="#15152a" metalness={0.85} roughness={0.3} />
        </mesh>
        {/* keyboard hint */}
        <mesh position={[0, -0.85, 0.35]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.4, 1.9]} />
          <meshStandardMaterial color="#0c0c1a" metalness={0.6} roughness={0.5} />
        </mesh>

        {/* screen, standing up */}
        <group position={[0, -0.9, -1.15]} rotation={[-1.45, 0, 0]}>
          <mesh position={[0, 1.35, 0]}>
            <boxGeometry args={[4.2, 2.8, 0.12]} />
            <meshStandardMaterial color="#15152a" metalness={0.85} roughness={0.3} />
          </mesh>
          <mesh ref={display} position={[0, 1.35, 0.07]}>
            <planeGeometry args={[3.8, 2.4]} />
            <meshStandardMaterial color="#0a0a14" emissive="#7a0f24" emissiveIntensity={0.5} />
          </mesh>
          {/* code on screen (clipped area) */}
          <group position={[0, 1.35, 0.09]}>
            <ScreenCode />
          </group>
        </group>
      </group>

      <Sparkles count={45} scale={8} size={3} speed={0.3} color="#ff2247" opacity={0.55} />
    </Float>
  );
};

const Hero3D = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      if (w < 500) setScale(0.55);
      else if (w < 768) setScale(0.68);
      else if (w < 1024) setScale(0.82);
      else setScale(0.95);
    };
    apply();

    const onMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("resize", apply);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <VisibilityGate>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 9], fov: 30 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.55} />
          <pointLight position={[5, 5, 5]} intensity={1.3} color="#ff2247" />
          <pointLight position={[-5, -3, 4]} intensity={1} color="#00d4ff" />
          <spotLight position={[0, 6, 4]} angle={0.5} intensity={0.9} penumbra={1} />

          <Laptop scale={scale} />
        </Suspense>

        <Preload all />
      </Canvas>
    </VisibilityGate>
  );
};

export default Hero3D;
