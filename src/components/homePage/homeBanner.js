import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import smokeImg from "../../assets/images/smoke.png";

import {
  Banner,
  Headline,
  Quote,
  Quoteline
} from "../../styles/homeStyles";
import { transition, parent, child } from "../../styles/animation";

//Custom hook
import useWindowSize from "../../hooks/useWindowSize";

const HomeBanner = () => {
  let mount = useRef(null);
  const size = useWindowSize();
  let scene, camera, renderer;
  let cloudParticles = [];

  useEffect(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, size.width / size.height, 1, 1000);

    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    let ambient = new THREE.AmbientLight(0x937474);
    scene.add(ambient);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(size.width, size.height);
    scene.fog = new THREE.FogExp2(0x657b92, 0.001);
    renderer.setClearColor(scene.fog.color);
    mount.current.appendChild(renderer.domElement);

    let loader = new THREE.TextureLoader();
    let cloudGeo, cloudMaterial;

    loader.load(smokeImg, function (texture) {
      //texture is loaded
      cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
      cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true
      });

      for (let p = 0; p < 25; p++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
          Math.random() * 1000 - 300,
          200,
          Math.random() * 500 - 600
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material.opacity = 0.45;
        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    });

    render();
  }, []);

  function render() {
    cloudParticles.forEach(p => {
      p.rotation.z -= 0.0005;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  return (
    <Banner
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.2, ease: transition }
      }}
      exit={{ opacity: 0 }}
    >
      <Quote variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>Hi there,</Headline>
        <Quoteline variants={child}>
          I am a HCI researcher / engineer. 
        </Quoteline>
        {/* <Quoteline variants={child}>
          I care about creating emotional and relational experiences using interactive technologies.
        </Quoteline> */}
      </Quote>
      <div ref={mount} />
    </Banner>
  );
};

export default HomeBanner;
