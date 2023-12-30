import { useEffect } from "react";
import * as THREE from "three";



const Cube = () => {
useEffect(()=>{
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    80,
    16/9,
    0.1,
    1000
)
camera.position.set(0,1,5);
const canvas = document.querySelector("#Cube");
const renderer = new THREE.WebGLRenderer({canvas,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper); 
const boxMaterial = new THREE.MeshBasicMaterial({color:0x00FF00});
const boxGeometry = new THREE.BoxGeometry();
const box = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);
function animate() {

      setTimeout(()=>{
          box.rotation.x += 0.05
      },3000)
        
}
animate();
// renderer.setAnimationLoop(animate);
renderer.render(scene,camera);

 

})
return (
    <div><canvas id="Cube"></canvas></div>
)
}

export default Cube;