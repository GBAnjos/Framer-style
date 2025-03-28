// services/figmaAPI.js

/**
 * This file contains the integration with Figma's API
 * In a real implementation, these functions would make actual API calls to Figma
 */

const FIGMA_API_BASE_URL = 'https://api.figma.com/v1';

// Initialize the Figma API client
export const initFigmaAPI = (accessToken) => {
  // Store the access token for later use
  localStorage.setItem('figmaAccessToken', accessToken);
  
  return {
    // Return the public API methods
    getFileStyles,
    getFileDetails,
    getTeamStyles,
    getStyleDetails,
    getFileNodes
  };
};

// Get the access token from localStorage
const getAccessToken = () => {
  return localStorage.getItem('figmaAccessToken');
};

// Make a request to the Figma API
const figmaRequest = async (endpoint, options = {}) => {
  const accessToken = getAccessToken();
  
  if (!accessToken) {
    throw new Error('No Figma access token found. Please reconnect to Figma.');
  }
  
  const url = `${FIGMA_API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Figma API error: ${response.status} ${response.statusText} - ${errorData.message || 'Unknown error'}`);
  }
  
  return response.json();
};

// Get styles from a Figma file
export const getFileStyles = async (fileId) => {
  // In a real implementation, this would fetch styles from a Figma file
  // For demo, we'll return the mock data from the styleService
  
  try {
    // This would be the actual API call in a real implementation:
    // const data = await figmaRequest(`/files/${fileId}/styles`);
    
    // For demo purposes, we're simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock data
    return {
      status: 200,
      styles: {
        // Color styles
        'S:12345,123:1': {
          key: 'S:12345,123:1',
          name: 'Primary/Blue',
          description: '',
          styleType: 'FILL',
          styleProperties: {
            fills: [{
              type: 'SOLID',
              color: { r: 0, g: 0.4, b: 1 },
              opacity: 1
            }]
          }
        },
        'S:12345,123:2': {
          key: 'S:12345,123:2',
          name: 'Primary/Red',
          description: '',
          styleType: 'FILL',
          styleProperties: {
            fills: [{
              type: 'SOLID',
              color: { r: 1, g: 0.23, b: 0.19 },
              opacity: 1
            }]
          }
        },
        // Text styles
        'S:12345,123:3': {
          key: 'S:12345,123:3',
          name: 'Heading/H1',
          description: '',
          styleType: 'TEXT',
          styleProperties: {
            fontFamily: 'Inter',
            fontSize: 32,
            fontWeight: 700,
            lineHeight: { unit: 'PERCENT', value: 120 }
          }
        },
        'S:12345,123:4': {
          key: 'S:12345,123:4',
          name: 'Body/Regular',
          description: '',
          styleType: 'TEXT',
          styleProperties: {
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: { unit: 'PERCENT', value: 150 }
          }
        }
      }
    };
  } catch (error) {
    console.error('Error fetching Figma file styles:', error);
    throw error;
  }
};

// Get details about a Figma file
export const getFileDetails = async (fileId) => {
  try {
    // In a real implementation, this would be:
    // return figmaRequest(`/files/${fileId}`);
    
    // For demo purposes, we're simulating an API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      name: 'Design System',
      lastModified: '2025-03-20T12:30:00Z',
      thumbnailUrl: 'https://example.com/thumbnail.png',
      version: '123456',
      document: {
        id: 'document-id',
        name: 'Document',
        type: 'DOCUMENT'
      }
    };
  } catch (error) {
    console.error('Error fetching Figma file details:', error);
    throw error;
  }
};

// Get styles from a Figma team
export const getTeamStyles = async (teamId) => {
  try {
    // In a real implementation, this would be:
    // return figmaRequest(`/teams/${teamId}/styles`);
    
    // For demo purposes, we're simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    return {
      status: 200,
      styles: [
        {
          key: 'S:98765,456:1',
          name: 'Brand/Blue',
          description: 'Brand blue color',
          styleType: 'FILL'
        },
        {
          key: 'S:98765,456:2',
          name: 'Brand/Green',
          description: 'Brand green color',
          styleType: 'FILL'
        },
        {
          key: 'S:98765,456:3',
          name: 'Display/Large',
          description: 'Large display text',
          styleType: 'TEXT'
        }
      ]
    };
  } catch (error) {
    console.error('Error fetching Figma team styles:', error);
    throw error;
  }
};

// Get details about a specific style
export const getStyleDetails = async (styleKey) => {
  try {
    // In a real implementation, this would be:
    // return figmaRequest(`/styles/${styleKey}`);
    
    // For demo purposes, we're simulating an API call
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Mock data for different style types
    if (styleKey.includes('FILL')) {
      return {
        key: styleKey,
        name: 'Brand/Blue',
        description: 'Brand blue color',
        styleType: 'FILL',
        styleProperties: {
          fills: [{
            type: 'SOLID',
            color: { r: 0.1, g: 0.3, b: 0.9 },
            opacity: 1
          }]
        }
      };
    } else {
      return {
        key: styleKey,
        name: 'Display/Large',
        description: 'Large display text',
        styleType: 'TEXT',
        styleProperties: {
          fontFamily: 'Montserrat',
          fontSize: 48,
          fontWeight: 700,
          lineHeight: { unit: 'PERCENT', value: 120 }
        }
      };
    }
  } catch (error) {
    console.error('Error fetching Figma style details:', error);
    throw error;
  }
};

// Get specific nodes from a Figma file
export const getFileNodes = async (fileId, nodeIds) => {
  try {
    // In a real implementation, this would be:
    // return figmaRequest(`/files/${fileId}/nodes?ids=${nodeIds.join(',')}`);
    
    // For demo purposes, we're simulating an API call
    await new Promise(resolve => setTimeout(resolve, 900));
    
    return {
      name: 'Design System',
      lastModified: '2025-03-20T12:30:00Z',
      nodes: {
        // Mock node data
        'node-id-1': {
          document: {
            id: 'node-id-1',
            name: 'Color Styles',
            type: 'FRAME'
          }
        },
        'node-id-2': {
          document: {
            id: 'node-id-2',
            name: 'Typography',
            type: 'FRAME'
          }
        }
      }
    };
  } catch (error) {
    console.error('Error fetching Figma file nodes:', error);
    throw error;
  }
};

// Helper function to convert Figma color format to CSS color
export const figmaColorToCSS = (color, opacity = 1) => {
  const { r, g, b } = color;
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);
  
  if (opacity < 1) {
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }
  
  return `rgb(${red}, ${green}, ${blue})`;
};

// Helper function to convert Figma color to hex
export const figmaColorToHex = (color) => {
  const { r, g, b } = color;
  const red = Math.round(r * 255).toString(16).padStart(2, '0');
  const green = Math.round(g * 255).toString(16).padStart(2, '0');
  const blue = Math.round(b * 255).toString(16).padStart(2, '0');
  
  return `#${red}${green}${blue}`.toUpperCase();
};
