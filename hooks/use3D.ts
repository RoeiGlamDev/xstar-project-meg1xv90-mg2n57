import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for managing 3D interactions with AI elements.
 * This hook utilizes three.js to create interactive 3D experiences
 * suitable for the VidNexus platform under the AI brand.
 * 
 * @returns {Object} - Contains methods for initializing and updating the 3D scene.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);

    useEffect(() => {
        // Initialize the 3D scene for AI
        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(rendererRef.current.domElement);

        // Set background color to white
        sceneRef.current.background = new THREE.Color(0xffffff);

        // Create a simple red and orange 3D cube representing AI technology
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xff4500 }); // orange
        const cube = new THREE.Mesh(geometry, material);
        sceneRef.current.add(cube);

        cameraRef.current.position.z = 5;

        const animate = () => {
            if (cube) {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
            }
            rendererRef.current?.render(sceneRef.current, cameraRef.current);
            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
            }
            rendererRef.current?.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameIdRef.current as number);
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
    };
};