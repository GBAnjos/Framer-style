import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const SyncSettings = ({ settings, onSettingsChange }) => {
  const handleChange = (key) => (value) => {
    onSettingsChange(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-lg font-semibold">Sync Settings</h2>
      
      <div className="flex items-center space-x-2">
        <Switch 
          id="overwrite" 
          checked={settings.overwriteExisting}
          onCheckedChange={handleChange('overwriteExisting')}
        />
        <Label htmlFor="overwrite">Overwrite existing styles</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch 
          id="variables" 
          checked={settings.createVariables}
          onCheckedChange={handleChange('createVariables')}
        />
        <Label htmlFor="variables">Create Framer variables</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch 
          id="opacity" 
          checked={settings.includeColorOpacity}
          onCheckedChange={handleChange('includeColorOpacity')}
        />
        <Label htmlFor="opacity">Include color opacity</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch 
          id="weights" 
          checked={settings.syncTextWeights}
          onCheckedChange={handleChange('syncTextWeights')}
        />
        <Label htmlFor="weights">Sync text weights</Label>
      </div>
    </div>
  );
};

export default SyncSettings;
