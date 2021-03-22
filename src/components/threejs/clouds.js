import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { map } from "lodash";
import smoke from './smoke.png'

import Cloud from './cloud'

// Context
import {
    useGlobalStateContext
  } from "../../context/globalContext";


function CloudParticles({ intensity} ) {
  const nodesCubes = map(new Array(20), (el, i) => {
    return <Cloud key={i} intensity={intensity} />;
  });
  return <group>{nodesCubes}</group>;
}

function Dolly() {
  useFrame(state => {
    state.camera.rotation.x = 1.16;
    state.camera.rotation.y = -0.12;
    state.camera.rotation.z = 0.27;
  })
  return null
}

const Clouds = () => {
    const { currentTheme } = useGlobalStateContext();
    const color = currentTheme === 'light' ? [0x83a5c9] : [0x5d6e80];
    const intensity = currentTheme === 'light' ? 9 : 0.1;
  return (
    <Canvas camera={{ fov: 60, position: [0, 0, 1], far: 1000 }}>
      <color attach="background" args={color} />
      <ambientLight color={0x937474} />
      <CloudParticles intensity={intensity} />
      <Dolly />
      <fogExp2 args={[0x657b92, 0.001]} />
    </Canvas>
  );
}

export default Clouds;
