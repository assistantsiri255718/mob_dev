// context/NavigationContext.js
import React, { createContext, useState } from 'react';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);

  return (
    <NavigationContext.Provider value={{ currentCategory, setCurrentCategory, currentSubcategory, setCurrentSubcategory }}>
      {children}
    </NavigationContext.Provider>
  );
};
