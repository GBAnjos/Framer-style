export const fetchFigmaStyles = async () => {
  // Mock data for development
  return {
    colors: [
      { id: 'color-1', name: 'Primary', value: '#0066FF', opacity: 1 },
      { id: 'color-2', name: 'Secondary', value: '#FF3B30', opacity: 1 }
    ],
    text: [
      { id: 'text-1', name: 'Heading', fontFamily: 'Inter', fontSize: 32, fontWeight: 700 }
    ]
  };
};

export const syncStylesToFramer = async (colors, text, settings) => {
  console.log('Syncing styles to Framer:', { colors, text, settings });
  return { success: true };
};
