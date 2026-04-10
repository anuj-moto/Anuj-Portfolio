import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, MeshDistortMaterial } from '@react-three/drei'
import type { Group, Points, Mesh } from 'three'
import * as THREE from 'three'

interface NodeProps {
  position: [number, number, number]
  label: string
  color: string
  size?: number
}

function WorkflowNode({ position, label, color, size = 0.4 }: NodeProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[size, 1]} />
          <MeshDistortMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            distort={0.2}
            speed={2}
          />
        </mesh>
        {/* Glow ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[size + 0.15, 0.02, 16, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
        <Text
          position={[0, -size - 0.3, 0]}
          fontSize={0.14}
          color="#E8E8ED"
          anchorX="center"
          anchorY="top"
          font="/fonts/SpaceGrotesk-Medium.ttf"
          maxWidth={1.5}
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

function ParticleTrails() {
  const pointsRef = useRef<Points>(null)

  const particles = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const accentColor = new THREE.Color('#6C5CE7')
    const glowColor = new THREE.Color('#A29BFE')

    // Seeded pseudo-random for deterministic renders
    let seed = 42
    const rand = () => {
      seed = (seed * 16807 + 0) % 2147483647
      return seed / 2147483647
    }

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 6
      const radius = 1.5 + Math.sin(i * 0.05) * 1
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = (rand() - 0.5) * 3
      positions[i * 3 + 2] = Math.sin(angle) * radius

      const color = rand() > 0.5 ? accentColor : glowColor
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function OrbitalSystem() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        state.clock.elapsedTime * 0.08 +
        state.pointer.x * 0.3
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.1 +
        state.pointer.y * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* Center — AI Core */}
      <WorkflowNode position={[0, 0, 0]} label="AI Core" color="#6C5CE7" size={0.5} />

      {/* Orbital nodes */}
      <WorkflowNode position={[-2, 0.8, 0.5]} label="Research" color="#A29BFE" size={0.3} />
      <WorkflowNode position={[2, 0.5, -0.5]} label="Design" color="#6C5CE7" size={0.35} />
      <WorkflowNode position={[0.5, -1.2, 1]} label="Prototype" color="#A29BFE" size={0.3} />
      <WorkflowNode position={[-1.5, -0.8, -1]} label="Test" color="#4A3FB5" size={0.28} />
      <WorkflowNode position={[1.8, -0.3, 1.2]} label="Ship" color="#A29BFE" size={0.32} />

      <ParticleTrails />
    </group>
  )
}

export function AIWorkflowScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#6C5CE7" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#A29BFE" />
        <OrbitalSystem />
      </Canvas>
    </div>
  )
}
