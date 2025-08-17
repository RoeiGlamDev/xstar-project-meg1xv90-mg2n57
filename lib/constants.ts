export const BRAND_NAME = "AI";

/
 * Color palette for the AI brand.
 * @constant {Object}
 * @property {string} primary - The primary color used in branding.
 * @property {string} secondary - The secondary color used in branding.
 * @property {string} background - The background color used in the application.
 */
export const COLORS = {
    primary: '#FF5733', // Red
    secondary: '#FF8D1B', // Orange
    background: '#FFFFFF', // White
};

/
 * Configuration settings for the AI application.
 * @interface AppConfig
 * @property {string} appName - The name of the application.
 * @property {string} version - The current version of the application.
 * @property {string[]} supportedLanguages - The languages supported by the application.
 */
export interface AppConfig {
    appName: string;
    version: string;
    supportedLanguages: string[];
}

/
 * Default configuration for the AI application.
 * @constant {AppConfig}
 */
export const DEFAULT_CONFIG: AppConfig = {
    appName: BRAND_NAME,
    version: '1.0.0',
    supportedLanguages: ['en', 'es', 'fr'],
};

/
 * AI-specific types and interfaces for video processing.
 * @interface Video
 * @property {string} id - Unique identifier for the video.
 * @property {string} title - The title of the video.
 * @property {string} description - A brief description of the video.
 * @property {string} url - The URL of the video.
 * @property {number} duration - The duration of the video in seconds.
 */
export interface Video {
    id: string;
    title: string;
    description: string;
    url: string;
    duration: number;
}

/
 * Function to create a new video object.
 * @param {string} id - The unique identifier for the video.
 * @param {string} title - The title of the video.
 * @param {string} description - A brief description of the video.
 * @param {string} url - The URL of the video.
 * @param {number} duration - The duration of the video in seconds.
 * @returns {Video} A new video object.
 */
export function createVideo(id: string, title: string, description: string, url: string, duration: number): Video {
    return {
        id,
        title,
        description,
        url,
        duration,
    };
}