// utils/index.js

/**
 * Utility functions for the Figma Style Sync plugin
 */

// Format style names consistently
export const formatStyleName = (name) => {
  // Handle different naming conventions
  // e.g., "Primary/Blue" or "Primary / Blue" or "Primary-Blue"
  
  // Replace any special characters with a standard separator
  const standardized = name.replace(/[\/\\\-_\s]+/g, '/');
  
  // Ensure we don't have double separators
  return standardized.replace(/\/+/g, '/').trim();
};

// Parse Figma style name to extract category and name
export const parseStyleName = (name) => {
  const parts = name.split('/');
  
  if (parts.length === 1) {
    return {
      category: null,
      name: parts[0].trim()
    };
  }
  
  return {
    category: parts[0].trim(),
    name: parts.slice(1).join('/').trim()
  };
};

// Generate a unique ID for styles
export const generateUniqueId = (prefix = '') => {
  return `${prefix}${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Debounce function to limit how often a function can be called
export const debounce = (func, delay) => {
  let timeoutId;
  
  return function(...args) {
    const context = this;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

// Convert Figma color to Framer color format
export const convertFigmaToFramerColor = (figmaColor, includeOpacity = true) => {
  const { r, g, b } = figmaColor;
  const opacity = figmaColor.opacity || 1;
  
  // Convert RGB values from 0-1 to 0-255
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);
  
  // Convert to hex
  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');
  
  const hex = `#${redHex}${greenHex}${blueHex}`.toUpperCase();
  
  // If opacity is 1 or we don't want to include opacity, return hex
  if (opacity === 1 || !includeOpacity) {
    return hex;
  }
  
  // Otherwise, return rgba
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

// Convert Figma text style to Framer text style format
export const convertFigmaToFramerTextStyle = (figmaTextStyle, includeWeights = true) => {
  const { fontFamily, fontSize, fontWeight, lineHeight } = figmaTextStyle;
  
  const framerTextStyle = {
    fontFamily,
    fontSize
  };
  
  // Add font weight if needed
  if (includeWeights && fontWeight) {
    framerTextStyle.fontWeight = fontWeight;
  }
  
  // Convert line height if available
  if (lineHeight) {
    if (lineHeight.unit === 'PIXELS') {
      framerTextStyle.lineHeight = lineHeight.value;
    } else if (lineHeight.unit === 'PERCENT') {
      // Convert percentage to decimal
      framerTextStyle.lineHeight = lineHeight.value / 100;
    } else {
      // Default value
      framerTextStyle.lineHeight = 1.2;
    }
  }
  
  return framerTextStyle;
};

// Check if two colors are the same
export const colorsAreEqual = (color1, color2) => {
  // Convert both colors to hex for comparison
  const hex1 = typeof color1 === 'string' ? color1 : convertFigmaToFramerColor(color1, false);
  const hex2 = typeof color2 === 'string' ? color2 : convertFigmaToFramerColor(color2, false);
  
  return hex1.toUpperCase() === hex2.toUpperCase();
};

// Handle Figma style name conflicts with Framer
export const resolveNameConflict = (name, existingNames, overwriteExisting = false) => {
  if (!existingNames.includes(name) || overwriteExisting) {
    return name;
  }
  
  // Find a unique name by adding a suffix
  let counter = 1;
  let newName = `${name} (${counter})`;
  
  while (existingNames.includes(newName)) {
    counter++;
    newName = `${name} (${counter})`;
  }
  
  return newName;
};

// Group styles by category
export const groupStylesByCategory = (styles) => {
  return styles.reduce((groups, style) => {
    const { category } = parseStyleName(style.name);
    
    if (!category) {
      // If no category, put in "Uncategorized"
      groups.Uncategorized = groups.Uncategorized || [];
      groups.Uncategorized.push(style);
      return groups;
    }
    
    // Otherwise, add to the appropriate category
    groups[category] = groups[category] || [];
    groups[category].push(style);
    
    return groups;
  }, {});
};

// Format a color value for display
export const formatColorForDisplay = (color) => {
  // If it's a hex color, return as is
  if (typeof color === 'string' && color.startsWith('#')) {
    return color.toUpperCase();
  }
  
  // If it's an rgba color, format it
  if (typeof color === 'string' && color.startsWith('rgba')) {
    const matches = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
    if (matches) {
      const [_, r, g, b, a] = matches;
      return `rgba(${r}, ${g}, ${b}, ${parseFloat(a).toFixed(2)})`;
    }
    return color;
  }
  
  // If it's a Figma color object, convert to hex
  if (color && typeof color === 'object') {
    return convertFigmaToFramerColor(color);
  }
  
  // Fallback
  return 'unknown color';
};
