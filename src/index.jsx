import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { useRoute, useLocation } from "wouter";
import "./style.css";
import { Experience } from "./Experience";

/*
Model JSX
Authors: Omar Faruq Tawsif (https://sketchfab.com/omarfaruqtawsif32) && 
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
*/

function Root() {
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  return (
    <>
      <Canvas
        camera={{ fov: 75, position: [0, 0, 20] }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
      >
        <Experience />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <a
          style={{ position: "absolute", top: 40, left: 40, fontSize: "14pt" }}
          href="#"
          onClick={() => setLocation("/")}
        >
          {!params && "Double click to enter a frame"}
        </a>
      </div>{" "}
    </>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
