// src/components/VickyAvatar.js
import React from "react";
import { Canvas } from "@react-three/fiber"; // Para renderizar 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Para controles y cargar modelos

// Componente que carga y muestra el modelo 3D de Vicky
function VickyAvatar() {
  // Usamos useGLTF para cargar el modelo 3D
  const { scene } = useGLTF("/assets/vickyModel.glb"); // Ruta al modelo .glb (colocado en assets)

  return (
    <Canvas>
      {/* Controles para interactuar con el modelo */}
      <OrbitControls />

      {/* Modelo 3D de Vicky */}
      <primitive object={scene} scale={0.5} position={[0, -1, 0]} />
    </Canvas>
  );
}

export default VickyAvatar;
