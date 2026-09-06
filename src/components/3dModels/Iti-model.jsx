import { PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ITILogoModel } from './Iti-logo';
import * as THREE from 'three';

function ItiModel() {
  return (
    <>
      <div className="w-1/2 h-full z-10 ">
        <Canvas
          className="w-1/2 canvas"
          camera={{
            position: [0, 0, 5],
            fov: 50,
            near: 0.1,
            far: 100,
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[10, 5, 10]} intensity={1} color="#ffffff" />
          <directionalLight position={[-10, 3, 5]} intensity={1} color="#ffb0b5" />
          <PresentationControls
            // Determines what area responds to dragging.
            global={false}
            cursor={true}
            // This controls whether the object returns/snaps to its original rotation when you stop dragging.
            snap={true}
            // Controls how strongly the model responds to dragging.
            speed={5}
            rotation={[
              THREE.MathUtils.degToRad(-10),
              THREE.MathUtils.degToRad(25),
              THREE.MathUtils.degToRad(0),
            ]}
            // It controls vertical rotation.
            polar={[-Math.PI * 2, Math.PI * 2]}
            // This controls horizontal rotation.
            azimuth={[-Math.PI * 2, Math.PI * 2]}
          >
            <ITILogoModel position={[0, 0, 0]} scale={1.5} />
          </PresentationControls>
          {/* <LogoBaseModel position={[0, 0, 0]} scale={1} /> */}
        </Canvas>
      </div>
    </>
  );
}

export default ItiModel;
