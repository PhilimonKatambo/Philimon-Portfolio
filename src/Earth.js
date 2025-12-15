import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import getStarfield from './earthSRC/getStarfield'
import { getFresnelMat } from './earthSRC/getFresnelMat'

const Earth = () => {
    const canvasEarth = useRef(null)

    useEffect(() => {
        const w = canvasEarth.current.clientWidth;
        const h = canvasEarth.current.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050816)

        const camera = new THREE.PerspectiveCamera(30, w / h, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        canvasEarth.current.appendChild(renderer.domElement);

        const earthGroup = new THREE.Group()
        earthGroup.rotation.z = -23.4 * Math.PI / 180;

        scene.add(earthGroup)
        const controls = new OrbitControls(camera, renderer.domElement)
        const loader = new THREE.TextureLoader()

        const detail = 20
        const geo = new THREE.IcosahedronGeometry(1.2, detail);
        const material = new THREE.MeshStandardMaterial({
            map: loader.load("./assets/8081_earthmap10k.jpg", function (texture) {
                console.log("Texture loaded successfully");
            }, undefined, function (error) {
                console.error("Error loading texture", error);
            })
        })

        const earthMesh = new THREE.Mesh(geo, material);

        const hemiLight=new THREE.HemisphereLight(0xffffff,0xffffff);
        scene.add(hemiLight)

        // const sunLight = new THREE.DirectionalLight(0xffffff)
        // sunLight.position.set(-2, 0.5, 1.5)
        // scene.add(sunLight)
        earthGroup.add(earthMesh);

        const lightMat = new THREE.MeshBasicMaterial({
            map: loader.load("/assets/8081_earthlights10k.jpg"),
            blending: THREE.AdditiveBlending,
            //color:0x00ff00,
            //transparent:true,
            //opacity:0.6
        })

        const cloudMat = new THREE.MeshStandardMaterial({
            map: loader.load("/assets/earthcloudmap.jpg"),
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.2
        })

        const cloudMesh = new THREE.Mesh(geo, cloudMat)

        earthGroup.add(cloudMesh)

        earthGroup.add(cloudMesh)
        const lightMesh = new THREE.Mesh(geo, lightMat)
        cloudMesh.scale.setScalar(1.01)
        earthGroup.add(lightMesh)

        const fresnelMat = getFresnelMat();
        const fresnelMesh = new THREE.Mesh(geo, fresnelMat)
        fresnelMesh.scale.setScalar(1.01)
        earthGroup.add(fresnelMesh)

        const stars = getStarfield({ numStars: 2000 });
        scene.add(stars)

        function animate() {
            requestAnimationFrame(animate)
            cloudMesh.rotation.y += 0.0050;
            lightMesh.rotation.y += 0.001;
            //earthMesh.rotation.y += 0.001;
            renderer.render(scene, camera)
            controls.update()
        }

        animate()

        return () => {
            controls.dispose()
            renderer.dispose()
            if (renderer.domElement && renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement)
            }
        }

    }, [])

    return (
        <div
            ref={canvasEarth}
            id='Earth'
        >
        </div>
    )
}

export default Earth