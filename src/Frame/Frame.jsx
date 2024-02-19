import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshPortalMaterial,
  Text,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import { suspend } from "suspend-react";

const regular = import("@pmndrs/assets/fonts/inter_regular.woff");

export const Frame = ({
  id,
  name,
  author,
  bg,
  width = 1,
  height = 1.61803398875,
  children,
  matcapId = "624541_FCD0C6_E4A19A_FCBCB4",
  onDoubleClick,
  ...props
}) => {
  const portal = useRef();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame((state, dt) =>
    easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, dt)
  );
  const [matcapTexture] = useMatcapTexture(matcapId, 256);

  return (
    <group {...props}>
      <Text3D
        size={0.1}
        height={0.01}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.002}
        bevelOffset={0}
        bevelSegments={5}
        position={[-0.375, 0.615, 0.012]}
        font="./fonts/helvetiker_regular.typeface.json"
      >
        {name}
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>

      <Text
        font={suspend(regular).default}
        fontSize={0.05}
        anchorX="right"
        position={[0.0, -0.677, 0.01]}
        material-toneMapped={false}
      >
        {author}
      </Text>
      <mesh
        name={id}
        onDoubleClick={(e) => {
          e.stopPropagation();
          setLocation("/item/" + e.object.name);
          onDoubleClick();
        }}
        onPointerOver={(e) => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial
          ref={portal}
          events={params?.id === id}
          side={THREE.DoubleSide}
        >
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
};
