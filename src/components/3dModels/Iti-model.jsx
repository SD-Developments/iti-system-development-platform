import { PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ITILogoModel } from './Iti-logo';
import * as THREE from 'three';

function ItiModel() {
  return (
    <>
      <div className="w-1/2 h-full z-10  relative ">
        <img
          alt="ico1"
          className="w-50 object-cover scale-100 transition-transform duration-1000 absolute inset-0 z-2 top-[15%] left-[0%]"
          src="/images/code.png"
        />
        <img
          alt="ico2"
          className="w-50 object-cover scale-100 transition-transform duration-1000 absolute inset-0 z-2 top-[70%] left-[15%]"
          src="/images/develop.png"
        />
        <img
          alt="ico3"
          className="w-50 object-cover scale-100 transition-transform duration-1000 absolute inset-0 z-2 top-[80%] left-[70%]"
          src="/images/api.png"
        />
        <img
          alt="ico2"
          className="w-60 object-cover scale-100 transition-transform duration-1000 absolute inset-0 z-2 top-[10%] left-[60%]"
          src="/images/learn.png"
        />
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
          <directionalLight position={[17, 6, 15]} intensity={1} color="#ffffff" />
          <directionalLight position={[-20, 3, 5]} intensity={1} color="#ffb0b5" />
          <PresentationControls
            global={false}
            cursor={true}
            snap={true}
            speed={5}
            rotation={[
              THREE.MathUtils.degToRad(-10),
              THREE.MathUtils.degToRad(25),
              THREE.MathUtils.degToRad(0),
            ]}
            polar={[-0.25, 0.25]}
            azimuth={[-0.5, 0.5]}
          >
            <ITILogoModel position={[0, 0, 0]} scale={1.5} />
          </PresentationControls>
        </Canvas>
      </div>
    </>
  );
}

export default ItiModel;
