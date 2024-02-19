import { useState } from "react";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";
import { Frame } from "../Frame";
import { Rig } from "../Rig";
import { AnimatedModel } from "../AnimatedModel";
import { useRoute, useLocation } from "wouter";
import { Model } from "../Model";

extend(geometry);

export const Experience = () => {
  const [animate, setAnimate] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <>
      <color attach="background" args={["#f0f0f0"]} />
      <Frame
        id="01"
        name={`Smol\nAme`}
        author="Seafoam"
        bg="#e4cdac"
        position={[-1.15, 0, 0]}
        rotation={[0, 0.5, 0]}
        matcapId="678E67_C4D9C4_ACC8AC_98B898"
        onDoubleClick={() => setAnimate(!animate)}
      >
        <AnimatedModel
          src="smol_ame_in_an_upcycled_terrarium_hololiveen.glb"
          scale={1}
          position={[0, -0.7, -3]}
          animated={animate}
          animationName="Animation"
          backTextPosition={[-0.875, 1.7, -2.75]}
          onBackClick={() => {
            setAnimate(false);
            setLocation("/");
          }}
          textColor="grey"
        />
      </Frame>
      <Frame id="02" name="tea" author="Omar Faruq Tawsif">
        <Model
          src="fiesta_tea-transformed.glb"
          position={[0, -2, -3]}
          backTextPosition={[-1.8, 1.4, -2.75]}
          onBackClick={() => {
            setLocation("/");
          }}
          textColor="lightblue"
        />
      </Frame>
      <Frame
        id="03"
        name="Brinjal Bomb!"
        author="Omar Faruq Tawsif"
        bg="#CBC3E3"
        position={[1.15, 0, 0]}
        rotation={[0, -0.2, 0]}
        matcapId="68049F_C90DE6_A404CF_B304DC"
      >
        <Model
          src="vitamin_bomb_the_brinjal_bomb.glb"
          scale={0.05}
          position={[0.6, -0.1, -3]}
          backTextPosition={[-0.875, 1.4, -2.75]}
          onBackClick={() => {
            setLocation("/");
          }}
          textColor="purple"
        />
      </Frame>
      <Rig />
    </>
  );
};
