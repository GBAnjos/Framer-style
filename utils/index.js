export const formatColorForFramer = (color, settings) => {
  let formatted = {
    name: color.name,
    value: color.value
  };

  if (settings.includeColorOpacity && color.opacity !== undefined) {
    formatted.opacity = color.opacity;
  }

  return formatted;
};

export const formatTextStyleForFramer = (textStyle, settings) => {
  let formatted = {
    name: textStyle.name,
    fontFamily: textStyle.fontFamily,
    fontSize: textStyle.fontSize,
    lineHeight: textStyle.lineHeight
  };

  if (settings.syncTextWeights && textStyle.fontWeight) {
    formatted.fontWeight = textStyle.fontWeight;
  }

  return formatted;
};

export const getUniqueName = (name, existingNames) => {
  let newName = name;
  let counter = 1;
  
  while (existingNames.includes(newName)) {
    newName = `${name} ${counter}`;
    counter++;
  }
  
  return newName;
};
