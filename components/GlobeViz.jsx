import React, { useState, useRef, useEffect } from 'react';

import * as THREE from 'three';
import { useKey } from 'react-use';
import Globe from 'globe.gl';
const arcsData = [
  {
    startLat: '-18.514171',
    startLng: '-39.916707',
    endLat: '34.490140',
    endLng: '-81.459081',
    color: ['#fff', '#2dd5ff']
  }
];

function GlobeViz() {
  useEffect(() => {
    const globeDOM = document.querySelector('.globe-el');
    const world = Globe()
      .globeImageUrl('/images/earth-blue-marble.jpg')
      .bumpImageUrl('/images/earth-topology.png')
      .arcsData(arcsData)
      .arcStroke(1)
      .width(800)
      .arcAltitude(0.2)
      .backgroundColor('rgba(0,0,0,0)')
      .arcColor('color')(globeDOM);

    window.addEventListener('resize', onWindowResize);

    const globeMaterial = world.globeMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load(
      '/images/earth-water.png',
      texture => {
        globeMaterial.specularMap = texture;
        globeMaterial.specular = new THREE.Color('grey');
        globeMaterial.shininess = 15;
      }
    );

    const updateLight = async () => {
      const directionalLight = world
        .scene()
        .children.find(obj3d => obj3d.type === 'DirectionalLight');
      if (directionalLight) {
        directionalLight.position.copy(world.camera().position);
      }
    };

    const onWindowResize = () => {
      updateLight();
      world.camera().aspect = window.innerWidth / window.innerHeight;
      world.camera().updateProjectionMatrix();
      world.camera().updateProjectionMatrix();
      world
        .renderer()
        .setSize(window.innerWidth, window.innerHeight);
    //   world.controls().handleResize();
    };

    // world.controls().enabled = true;
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 1.1;
    world.camera().zoom = 1.4;
    world.controls().addEventListener('change', updateLight, false);
    updateLight();
  }, []);

  return (
    <div className="globe-elm">
      <div className="globe-el"></div>
      {/* <Globe
				ref={globeEl}
				arcsData={arcsData}
				arcStroke={1}
				globeMaterial={globeMaterial}
				width={800}
				onGlobeReady={() => initGlobe()}
				arcAltitude={0.2}
				backgroundColor="rgba(0,0,0,0)"
				arcColor={"color"}
				globeImageUrl="/images/earth-blue-marble.jpg"
				bumpImageUrl="/images/earth-topology.png"
			/> */}
    </div>
  );
}

export default GlobeViz;

/* Utils


	// useKey("ArrowUp", () => globeEl.current.scene().lookAt(1, 3, 4));
	// // useKey("ArrowRight", () => globeEl.current.camera().up.x ++);
	// // useKey("ArrowLeft", () => globeEl.current.camera().up.x--);
	// useKey("ArrowUp", () => globeEl.current.camera().quaternion._x--);
    // console.log(globeEl.current.camera().position)

    */
