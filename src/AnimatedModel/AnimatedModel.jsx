import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Text3D } from "@react-three/drei";

export const AnimatedModel = ({
  src,
  position,
  scale,
  animated,
  animationName,
  backTextPosition,
  onBackClick,
  textColor,
}) => {
  const modeloRef = useRef();
  const { scene, animations } = useGLTF(src);
  const { actions } = useAnimations(animations, modeloRef);

  useFrame((state, delta) => {
    if (animated) {
      actions[animationName].play();
    }
  }, []);

  const handlePointerOver = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
  };

  return (
    <>
      <Text3D
        size={0.1}
        height={0.01}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.002}
        bevelOffset={0}
        bevelSegments={5}
        position={backTextPosition}
        font="./fonts/helvetiker_regular.typeface.json"
        onClick={onBackClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        &lt; Back
        <meshBasicMaterial color={textColor} />
      </Text3D>
      <primitive
        ref={modeloRef}
        object={scene}
        scale={scale}
        position={position}
      />
    </>
  );
};
