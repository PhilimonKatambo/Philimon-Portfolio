import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const Desktop = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const width = canvasRef.current.clientWidth
    const height = canvasRef.current.clientHeight

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x050816)

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
    camera.position.set(4, 4, 4)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    canvasRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const light = new THREE.AmbientLight(0x915eff, 10)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10)
    directionalLight.position.set(5, 10, 7.5)
    directionalLight.castShadow = true
    scene.add(directionalLight)
    scene.add(light)

    const loader = new GLTFLoader()
    loader.load('./3dObjects/computer.glb', (gltf) => {
      const deskMesh = gltf.scene
      deskMesh.scale.set(50, 50, 50)
      deskMesh.position.set(0, 1, 0)
      scene.add(deskMesh)
    })

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
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
      ref={canvasRef}
      style={{
        width: '380px',
        height: '220px',
      }}

      id='pcCont'
    />
  )
}

export default Desktop
