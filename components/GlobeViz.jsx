import React, { useState, useRef, useEffect } from 'react';

import * as THREE from 'three';
import Globe from 'globe.gl';
const arcsData = [
  {
    startLat: '6.814894213835802',
    startLng: '-10.705630223616884',
    endLat: '30.0329222',
    endLng: '-90.0226499',
    color: ['#fff', '#2dd5ff']
  },
  {
    startLat: '19.262780695424368',
    startLng: '7.581262260433491',
    endLat: '46.64406461540095',
    endLng: '2.6049684464399627',
    color: ['#fff', '#2dd5ff']
  },
  {
    startLat: '35.70040607259982',
    startLng: '139.76703432517624',
    endLat: '34.05006796590357',
    endLng: '-118.23703385026508',
    color: ['#fff', '#2dd5ff']
  },
  {
    startLat: '51.51180235509687',
    startLng: '-0.12916360912427974',
    endLat: '40.66131680386413',
    endLng: '-73.94550224918119',
    color: ['#fff', '#2dd5ff']
  },
  {
    startLat: '51.51180235509687',

    startLng: '55.775230337240174',
    endLat: '39.92676614571774',
    endLng: '116.33148284879371',
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
      .atmosphereColor('rgb(95, 95, 95)')
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
      world
        .renderer()
        .setSize(window.innerWidth, window.innerHeight);
      //   world.controls().handleResize();
    };

    // world.controls().enabled = false;
    // world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 1.1;
    world.camera().zoom = 1.4;
    world.controls().addEventListener('change', updateLight, false);
    updateLight();
  }, []);

  return (
    <div className="globe-elm">
      <div className="globe-el"></div>
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
