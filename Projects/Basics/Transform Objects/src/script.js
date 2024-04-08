import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
/**
 * const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
*/
// the position can be declared anywhere aftewr creating the mesh and before you render
/**
 * mesh.position.x = 0.7
mesh.position.y = - 0.6
mesh.position.z = 1
**/

//set position in a single pass
//mesh.position.set(0.7, - 0.6, 1)

// Scale
/**
 * mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5**/
// all at once
//mesh.scale.set(2,0.5,0.5)


//Rotation

//rotation

//mesh.rotation.y = 3.14159 //PI!! for half a rotation
//mesh.rotation.y = Math.PI/2

//gimber lock - change the oder of the rotation. also reorder first and then set the x, y z values!!!
/**
 * mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
scene.add(mesh)

*/

// Group

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000 })
)

const cube2  = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00 })
)
cube2.position.x = - 2

const cube3  = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'blue' })
)
cube3.position.x = 2

group.add(cube1)
group.add(cube2)
group.add(cube3)

group.rotation.y = 1
group.position.y = 1
group.scale.y = 2

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//console.log(mesh.position.length())

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
//camera.position.y = 1
//camera.position.x = 1
scene.add(camera)

//console.log(mesh.position.distanceTo(camera.position))

//mesh.position.normalize() // reduce the length of the vector to 1
//console.log(mesh.position.length())

//LOOK AT SOMETHING

//camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

