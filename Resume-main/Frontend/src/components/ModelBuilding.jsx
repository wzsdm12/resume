// eslint-disable-next-line no-unused-vars
import React, { useMemo } from 'react';
import {useGLTF, Text, shaderMaterial} from "@react-three/drei";
import * as THREE from 'three'; // Import THREE

// Define the vertex and fragment shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 emissiveColor;
  varying vec2 vUv;
  void main() {
    vec4 color = vec4(mix(color1, color2, vUv.y), 1.0);
    vec4 emissive = vec4(emissiveColor, 1.0) * step(0.5, vUv.y); // Only apply emissive to specific areas
    gl_FragColor = color + emissive;
  }
`;

// Create the shader material with emissive color
shaderMaterial(
    { color1: new THREE.Color(0xCCCCCC), color2: new THREE.Color(0x333333), emissiveColor: new THREE.Color(0x800080) },
    vertexShader,
    fragmentShader
);
// eslint-disable-next-line react/prop-types
function Model({ path, scale = [1, 1, 1], rotation = [0, 0, 0] }) {
    const { nodes } = useGLTF(path);

    const gradientMaterial = useMemo(
        () => new THREE.ShaderMaterial({
            uniforms: {
                color1: { value: new THREE.Color(0xCCCCCC) }, // Light gray
                color2: { value: new THREE.Color(0x333333) }, // Dark gray
                emissiveColor: { value: new THREE.Color(0x800080) }, // Purple emissive color
            },
            vertexShader,
            fragmentShader,
        }),
        []
    );

    return (
        // eslint-disable-next-line react/no-unknown-property
        <group dispose={null} scale={scale} rotation={rotation}>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <pointLight color={0x800080} intensity={2} distance={5} position={[0, 1, 1]} /> {/* Position the point light inside the building */}
            {nodes && Object.keys(nodes).map((key) => (
                nodes[key].geometry && (
                    // eslint-disable-next-line react/no-unknown-property
                    <mesh key={key} geometry={nodes[key].geometry} material={gradientMaterial} />
                )
            ))}
            <Text
                position={[0.1, 2.9, 6.0]} // Adjust position to place text on the side
                rotation={[0, 0, Math.PI / 400]} // Rotate text to be vertical
                fontSize={0.5} // Increase font size
                color="white" // Text color
                anchorX="center" // Anchor text to center horizontally
                anchorY="middle" // Anchor text to middle vertically

            >
                RESUMO Inc.
            </Text>
        </group>
    );
}

export default Model;
