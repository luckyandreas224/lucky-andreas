// three-js-background.js

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Particle parameters
const particleCount = 1000;
const particles = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleSpeeds = new Float32Array(particleCount);

// Randomly generate particle positions and speeds
for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 100;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    particleSpeeds[i] = Math.random() * 0.02 + 0.01;
}

// Create particle material
const particleMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.5,
    blending: THREE.AdditiveBlending,
    transparent: true,
});

// Create particle system
particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// Set up camera position
camera.position.z = 50;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    const positions = particleSystem.geometry.attributes.position.array;
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] -= particleSpeeds[i]; // Move particles downward
        if (positions[i * 3 + 1] < -50) {
            positions[i * 3 + 1] = 50; // Reset particle position
        }
    }

    // Make particles respond to mouse movement
    document.addEventListener('mousemove', (event) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        particleSystem.rotation.x = mouseY * 0.5;
        particleSystem.rotation.y = mouseX * 0.5;
    });

    particleSystem.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();

