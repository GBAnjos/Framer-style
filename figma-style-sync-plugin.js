// index.js - Main entry point for the Framer plugin

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Initialize the plugin
function main() {
  const container = document.getElementById('root');
  render(<App />, container);
}

// Start the plugin
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
