import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const ThreeOrgScene = ({
  children,
  backgroundColor = "black",
}) => {
  return (
    <div
      className={`w-full max-h-[80vh] aspect-square rounded-lg overflow-hidden`}
      style={{ backgroundColor: backgroundColor }}
    >
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        {children}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ThreeOrgScene