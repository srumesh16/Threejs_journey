import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
/**
 * Texture
 

const image = new Image()
const texture = new THREE.Texture(image)
texture.colorSpace = THREE.SRGBColorSpace


image.onload = () =>
{
    texture.needsUpdate = true
    
}

image.src = '/textures/door/color.jpg'

OR
*/
const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = () => {
    console.log('onStart')
}

loadingManager.onLoad = () => {
    console.log('onLoad')
}

loadingManager.onProgress = () => {
    console.log('onProgress')
}

loadingManager.onError = () => {
    console.log('onError')
}

const textureLoader = new THREE.TextureLoader(loadingManager)
/*const texture = textureLoader.load(
    '/textures/door/color.jpg',
    () => {
        console.log('load')
    },
    () => {
        console.log('progress')
    },
    () => {
        controls.log('error')
    })*/
const colortexture = textureLoader.load('/textures/minecraft.png') 
colortexture.colorSpace = THREE.SRGBColorSpace

const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const ambientTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const heightTexture = textureLoader.load('textures/door/height.jpg')
const normalTexture = textureLoader.load('textures/door/normal.jpg')
const roughtexture = textureLoader.load('textures/door/roughness.jpg')
const metalnessTexture = textureLoader.load('textures/door/metalness.jpg')

alphaTexture.colorSpace = THREE.SRGBColorSpace
ambientTexture.colorSpace = THREE.SRGBColorSpace
heightTexture.colorSpace = THREE.SRGBColorSpace
normalTexture.colorSpace = THREE.SRGBColorSpace
roughtexture.colorSpace = THREE.SRGBColorSpace
metalnessTexture.colorSpace = THREE.SRGBColorSpace

/**
 * colortexture.repeat.x = 2
colortexture.repeat.y = 3
colortexture.wrapS = THREE.MirroredRepeatWrapping
colortexture.wrapT = THREE.MirroredRepeatWrapping

colortexture.offset.x = 0.5
colortexture.offset.y = 0.5
*/

/**
 * colortexture.rotation = Math.PI * 0.25
colortexture.center.x = 0.5
colortexture.center.y = 0.5
*/

colortexture.generateMipmaps = false
colortexture.minFilter = THREE.NearestFilter
colortexture.magFilter = THREE.NearestFilter
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
console.log(geometry.attributes.uv)
const material = new THREE.MeshBasicMaterial({ map: colortexture  })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 1
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()