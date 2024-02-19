import { Gltf, Text3D } from "@react-three/drei";

export const Model = ({
  src,
  position,
  scale,
  backTextPosition,
  onBackClick,
  textColor,
}) => {
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
      <Gltf src={src} position={position} scale={scale} />;
    </>
  );
};
