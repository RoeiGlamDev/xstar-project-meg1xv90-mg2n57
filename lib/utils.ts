import { Video } from './types';

/
 * Utility functions for the AI application.
 * Provides common functionalities for video processing and formatting.
 * 
 * @module utils
 */

/
 * Converts a string to a camelCase format.
 * 
 * @param {string} str - The string to be converted.
 * @returns {string} - The camelCased string.
 * 
 * @example
 * cnFunction("Hello World") // returns "helloWorld"
 */
export function cnFunction(str: string): string {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '');
}

/
 * Formats the video title for display on the VidNexus platform.
 * 
 * @param {Video} video - The video object to format.
 * @returns {string} - The formatted video title.
 * 
 * @example
 * formatVideoTitle({ title: "AI Innovations" }) // returns "Watch: AI Innovations"
 */
export function formatVideoTitle(video: Video): string {
    return Watch: ${video.title};
}

/
 * Formats the video's description for better readability.
 * 
 * @param {string} description - The raw description of the video.
 * @returns {string} - The formatted description.
 * 
 * @example
 * formatVideoDescription("This is a video about AI.") // returns "This is a video about AI."
 */
export function formatVideoDescription(description: string): string {
    return description.trim();
}

/
 * Formats the video creation date to a human-readable format.
 * 
 * @param {Date} date - The date the video was created.
 * @returns {string} - The formatted date string.
 * 
 * @example
 * formatVideoDate(new Date()) // returns "October 1, 2023"
 */
export function formatVideoDate(date: Date): string {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/
 * Validates the video data for the VidNexus platform.
 * 
 * @param {Video} video - The video object to validate.
 * @returns {boolean} - True if valid, false otherwise.
 * 
 * @example
 * validateVideo({ title: "AI Innovations", description: "An overview of AI." }) // returns true
 */
export function validateVideo(video: Video): boolean {
    return video.title.length > 0 && video.description.length > 0;
}