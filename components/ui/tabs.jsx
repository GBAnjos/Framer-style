import React from 'react';

export const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab, className }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsTrigger) {
          return React.cloneElement(child, { 
            active: child.props.value === activeTab,
            onClick: () => setActiveTab(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
};

export const TabsTrigger = ({ 
  children, 
  value, 
  active, 
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${active ? 'bg-gray-100' : ''} px-4 py-2 rounded`}
      value={value}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value, activeTab }) => {
  if (value !== activeTab) return null;
  return <div className="mt-2">{children}</div>;
};
