import React from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { map } from 'lodash'

import Cloud from './cloud'

// Context
import {
    useThemeStateContext
  } from "../../context/themeContext";


function CloudParticles({ hasLight } ) {
  const nodesCubes = map(new Array(25), (el, i) => {
    return <Cloud key={i} hasLight={hasLight} />;
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
    const { currentTheme } = useThemeStateContext();
    const color = currentTheme === 'light' ? [0x83a5c9] : [0x5d6e80];
    const hasLight = currentTheme === 'light';
  return (
    <Canvas camera={{ fov: 60, position: [0, 0, 20], far: 1000 }}>
      <color attach="background" args={color} />
      <ambientLight color={0x937474} />
      <CloudParticles hasLight={hasLight} />
      <Dolly />
      <fogExp2 args={[0x657b92, 0.001]} />
    </Canvas>
  );
}

export default Clouds;
