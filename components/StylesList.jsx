import React from 'react';

const StylesList = ({ styles, selectedStyles, onToggleStyle, type }) => {
  return (
    <div className="space-y-2">
      {styles.length === 0 ? (
        <p className="text-gray-500">No {type} styles found</p>
      ) : (
        <ul className="space-y-2">
          {styles.map((style) => (
            <li key={style.id} className="flex items-center">
              <input
                type="checkbox"
                id={style.id}
                checked={selectedStyles.includes(style.id)}
                onChange={() => onToggleStyle(style.id)}
                className="mr-2"
              />
              <label htmlFor={style.id} className="flex items-center">
                {type === 'color' && (
                  <span 
                    className="w-4 h-4 rounded-full mr-2 border border-gray-300"
                    style={{ 
                      backgroundColor: style.value,
                      opacity: style.opacity || 1
                    }}
                  />
                )}
                {style.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StylesList;
