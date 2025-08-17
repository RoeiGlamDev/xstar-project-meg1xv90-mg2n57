import { useState, useEffect } from 'react';

/
 * Custom hook for handling animations in the AI technology sector.
 * This hook provides functionality to animate UI elements based on user interactions,
 * enhancing the overall user experience for the VidNexus platform.
 * 
 * @returns {Object} An object containing animation states and functions
 * @property {boolean} isAnimating - Indicates if an animation is currently active
 * @property {Function} startAnimation - Function to initiate an animation
 * @property {Function} stopAnimation - Function to cease animation
 */
interface AnimationHook {
    isAnimating: boolean;
    startAnimation: () => void;
    stopAnimation: () => void;
}

export const useAnimation = (): AnimationHook => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    /
     * Starts the animation by setting isAnimating to true.
     * This function can be called when user triggers an action
     * that requires visual feedback, such as clicking a button to create a new AI video.
     */
    const startAnimation = () => {
        setIsAnimating(true);
        // Additional animation logic can be added here
        // For example, triggering CSS animations or transitions
    };

    /
     * Stops the animation by setting isAnimating to false.
     * This function should be used to reset the animation state
     * after the animation completes or when the user navigates away.
     */
    const stopAnimation = () => {
        setIsAnimating(false);
        // Cleanup or reset animation state logic can be added here
    };

    useEffect(() => {
        // Example effect to handle animation completion
        if (isAnimating) {
            const animationTimeout = setTimeout(() => {
                stopAnimation();
            }, 1000); // Adjust the duration based on the animation length

            return () => clearTimeout(animationTimeout);
        }
    }, [isAnimating]);

    return {
        isAnimating,
        startAnimation,
        stopAnimation,
    };
};