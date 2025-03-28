import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StylesList from './StylesList';
import SyncSettings from './SyncSettings';
import { fetchFigmaStyles } from '../services/styleService';

const App = () => {
  const [styles, setStyles] = useState({ colors: [], text: [] });
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedText, setSelectedText] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    overwriteExisting: false,
    createVariables: true,
    includeColorOpacity: true,
    syncTextWeights: true
  });

  useEffect(() => {
    const loadStyles = async () => {
      setIsLoading(true);
      try {
        const figmaStyles = await fetchFigmaStyles();
        setStyles(figmaStyles);
      } catch (error) {
        console.error('Error loading styles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadStyles();
  }, []);

  const handleSync = async () => {
    // Implement sync logic
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Figma Style Sync</h1>
      
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="colors">Color Styles</TabsTrigger>
          <TabsTrigger value="text">Text Styles</TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors">
          <StylesList
            styles={styles.colors}
            selectedStyles={selectedColors}
            onToggleStyle={(id) => setSelectedColors(prev => 
              prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
            )}
            type="color"
          />
        </TabsContent>
        
        <TabsContent value="text">
          <StylesList
            styles={styles.text}
            selectedStyles={selectedText}
            onToggleStyle={(id) => setSelectedText(prev => 
              prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
            )}
            type="text"
          />
        </TabsContent>
      </Tabs>

      <SyncSettings settings={settings} onSettingsChange={setSettings} />
      
      <button 
        onClick={handleSync}
        disabled={isLoading}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Syncing...' : 'Sync Selected Styles'}
      </button>
    </div>
  );
};

export default App;
