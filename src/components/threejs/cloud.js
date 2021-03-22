import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import smoke from './smoke.png'

// Context
import { useGlobalStateContext } from "../../context/globalContext";

const Cloud = ({ intensity }) => {
    const cloud = useRef()
    const light = useRef()

    const { viewport, mouse } = useThree()

    let loader = new THREE.TextureLoader();
    const texture = loader.load(smoke);

    const position = useMemo(() => {
        return [Math.random() * 1000 - 300, 200, Math.random() * 500 - 600];
    }, []);

    const rotz = useMemo(() => {
        return Math.random() * 2 * Math.PI;
    }, []);

    useFrame((state) => {
        light.current.position.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)
        cloud.current.rotation.z -= 0.0005;
        cloud.current.material.opacity = 0.45;
    })

    return (
        <>
            <pointLight ref={light} intensity={intensity} color="lightblue" />
            <mesh ref={cloud} position={position} rotation={[1.16, -0.12, rotz]}>
                <planeBufferGeometry args={[500, 500]} />
                <meshLambertMaterial map={texture} transparent={true} />
            </mesh>
        </>
    )
}

export default Cloud;